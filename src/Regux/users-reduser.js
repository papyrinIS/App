import {followAPI, usersAPI} from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS= "SET_USERS";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
    users: [ ],
    pageSize:5,
    totalUsersCount:21,
    currentPage: 1,
    isFetching: true ,
    followingProgress: []
};


const usersReduser = (State = initialState, action) => {


    switch (action.type) {

        case FOLLOW:

            return {
                ...State,
                users: State.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u,followed:true}
                    }
                    return u;
                })
            }



        case UNFOLLOW:
            return {
                ...State,
                users: State.users.map(u=>{
                    if(u.id === action.userId){
                        return {...u,followed:false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return{
                ...State, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
        return{...State, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
        return{
            ...State, totalUsersCount: action.totalUsersCount
        }
        case TOGGLE_IS_FETCHING:
            return{
                ...State , isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...State,
                followingProgress: action.isFetching
                    ? [...State.followingProgress, action.userId]
                    : State.followingProgress.filter(id => id != action.userId)
            }
        }

        default :
            return State;
    }


}

export const followe = (userId) => ({type: FOLLOW, userId})
export const unfollowe = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount =(totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching , userId) => ({type:TOGGLE_FOLLOWING_PROGRESS , isFetching, userId})



export const getUsersThankCreator = (currentPage, pageSize)  => async (dispatch)=>{

    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));


}

export const followThunkCreator = (userId) => {
      return async(dispatch) => {
        dispatch(toggleFollowingProgress(true , userId));
        let response = await followAPI.unfollow(userId);
            if (response.resultCode === 0) {
                dispatch(unfollowe(userId))
            }
            dispatch(toggleFollowingProgress(false , userId));

    }
}


export const unfollowThunkCreator = (userId) => {
    return async(dispatch) => {

        dispatch(toggleFollowingProgress(true , userId));
       let response = await followAPI.follow(userId);
            if (response.resultCode === 0) {
                dispatch(followe(userId))
            }
            dispatch(toggleFollowingProgress(false , userId));


    }
}



export default usersReduser;
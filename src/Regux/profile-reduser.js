import {profileAPI} from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialstate = {
    Posts: [
        {id: 1, messege: "Hello"},
        {id: 2, messege: "hi"},
        {id: 3, messege: "hm..."}
    ],
    profile: null,
    status: "lfndo"
};


const profileReduser = (State = initialstate, action) => {


    switch (action.type) {
        case ADD_POST:
            return {
                ...State,
                Posts: [...State.Posts, {id: 4, messege: action.addNewPost}],
            }
        case SET_USER_PROFILE: {
            return {...State, profile: action.profile}
        }

        case SET_STATUS: {
            return {...State, status: action.status}
        }


        default:
            return State;
    }


    return State;
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostActionCreater = (addNewPost) => ({type: ADD_POST, addNewPost})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const fileThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getFile(userId);
        dispatch(setUserProfile(response.data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}


export default profileReduser;
import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followe,
    setCurrentPage,
    unfollowe,
    toggleFollowingProgress, getUsersThankCreator, unfollowThunkCreator, followThunkCreator
} from "../../Regux/users-reduser";
import Preloader from "../common/preloader/Preloader";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getsUsers,
    getTotalUsersCount
} from "../../Regux/usersSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} =this.props;
        this.props.getUsersThankCreator(currentPage, pageSize);

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThankCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unfollowe={this.props.unfollowe}
                   followe={this.props.followe}
                   users={this.props.users}
                   followingProgress={this.props.followingProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
                   followThunkCreator={this.props.followThunkCreator}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getsUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}
/*let mapStateToProps = (state)=>{
  return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  }
}*/

/*let mapDispatchToProps = (dispatch) => {
  return {
    followe: (userId) => {
      dispatch(followedAC(userId));
    },
    unfollowe: (userId)=>{
      dispatch(unfollowAC(userId));
    },
    setUsers:(users)=>{
      dispatch(setUsersAC(users));
    },
    setCurrentPage:(pageNumber)=>{
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount:(totalCount)=>{
      dispatch(setTotalUsersCountAC(totalCount));
    },
    setIsFetching: (isFetching)=>{
      dispatch(isFetchingAC(isFetching));
    }
  }
}*/

export default connect(mapStateToProps, {
    followe,
    unfollowe,
    setCurrentPage,
    toggleFollowingProgress,
    getUsersThankCreator,
    unfollowThunkCreator,
    followThunkCreator

})(UsersContainer);


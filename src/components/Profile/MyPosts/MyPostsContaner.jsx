import React from 'react';
import {addPostActionCreater} from "../../../Regux/profile-reduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";






let mapStateToProps = (state)=>{
    return{
        Posts: state.ProFilePage.Posts,
        newPostText: state.ProFilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        add: (addNewPost)=>{
            dispatch(addPostActionCreater(addNewPost));
        }
    }
}


const MyPostsContaner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContaner;

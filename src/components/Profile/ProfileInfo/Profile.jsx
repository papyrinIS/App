import React from 'react';
import p from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import photo from "../../../image/user.jpg";
import ProfileStatus from "../ProfileStatus";
import MyPostsContaner from "../MyPosts/MyPostsContaner";
import ProfileStatusWithHook from "../ProfileStatusWithHook";



const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
  return (<div>

          <div className = "ava">
              <img src={props.profile.photos.large != null ? props.profile.photos.large : photo }/>

              <div>{props.profile.fullName}</div>
              <div>{props.profile.contacts.vk}</div>
              <div>{props.profile.contacts.instagram}</div>

              <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>

          </div>

      </div>
  )
}

export default ProfileInfo;

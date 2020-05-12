import React from 'react';
import p from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContaner from "./MyPosts/MyPostsContaner";
import ProfileStatus from "./ProfileStatus";


const Profile = (props) => {
  return (
      <div className= "content">
          <ProfileInfo profile={props.profile} status={props.status}
                       updateStatus={props.updateStatus}/>
          <MyPostsContaner/>
      </div>
  )
}

export default Profile;

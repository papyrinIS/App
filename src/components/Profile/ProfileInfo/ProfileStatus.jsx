import React from 'react';
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContaner from "./MyPosts/MyPostsContaner";


class ProfileStatus extends React.Component {
    state ={
       editMode:false
    }
    status=()=>{

        this.setState({
        editMode: true
    });}
    desstatus=()=>{
        this.setState({
        editMode: false
    });}
    render(){
  return (
      <div>
          {!this.state.editMode &&
          <div>
              <span onDoubleClick={this.status}> {this.props.status}</span>
          </div>
          }
          {this.state.editMode &&
          <div>
              <input autoFocus={true} onBlur={this.desstatus}  value={this.props.status}/>
          </div>
          }
      </div>
  )
}}

export default ProfileStatus;

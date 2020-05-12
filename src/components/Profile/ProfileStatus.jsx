import React from 'react';
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContaner from "./MyPosts/MyPostsContaner";


class ProfileStatus extends React.Component {
    state ={
       editMode:false,
        status: this.props.status
    }
    status=()=>{

        this.setState({
        editMode: true
    });}
    desstatus=()=>{
        this.setState({
        editMode: false
    });
    this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    render(){
  return (
      <div>
          {!this.state.editMode &&
          <div>
              <span onDoubleClick={this.status}> {this.props.status || "_____"}</span>
          </div>
          }
          {this.state.editMode &&
          <div>
              <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.desstatus}  value={this.state.status}/>
          </div>
          }
      </div>
  )
}}

export default ProfileStatus;

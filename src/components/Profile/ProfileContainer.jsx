import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    fileThunkCreator, getStatus,
    updateStatus
} from "../../Regux/profile-reduser";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../HOC/authRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId){
            userId=this.props.userId;

        }
        this.props.fileThunkCreator(userId);
       // setTimeout(() => {
            this.props.getStatus(userId);
        //}, 1000);
    }
    componentDidUpdate(prevProps, prevState) {
if(prevProps.status !== this.props.status){
    this.setState({
    status:this.props.status});
}
    }

    render(){

        return (
            <Profile { ...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
    }
let mapStateToProps = (state)=>{
 return{
     profile: state.ProFilePage.profile,
     status: state.ProFilePage.status,
     userId: state.auth.id,
     isAuth:state.auth.isAuth

 }
};


export default compose(
    connect(mapStateToProps,{fileThunkCreator, getStatus, updateStatus}),
   withRouter,
    withAuthRedirectComponent
)(ProfileContainer);

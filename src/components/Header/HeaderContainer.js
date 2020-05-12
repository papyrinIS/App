import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {authThunkCreator, logout, setAuthUserData} from "../../Regux/auth-reduser";
import {authAPI} from "../../API/api";


class HeaderContainer extends React.Component {


    render(){
  return (
        <Header { ...this.props}  />
  )}
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect (mapStateToProps,{setAuthUserData, logout})(HeaderContainer);

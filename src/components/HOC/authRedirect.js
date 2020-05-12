import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";



let mapStateToPropsRedirect = (state) => {
    return {
        auth: state.auth.isAuth
    }
}

export const  withAuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {

        render() {
            if (this.props.auth === false) return <Redirect to={"/Login"}/>
            return <Component {...this.props}/>
        }
    }
    let ConnecterRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
    return ConnecterRedirectComponent;
}


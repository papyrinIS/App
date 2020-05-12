import React from 'react';

import {sendMessegeCreater} from "../../Regux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {withAuthRedirectComponent} from "../HOC/authRedirect";
import {compose} from "redux";




let mapStateToProps = (state)=>{
    return{
        DialogsPage: state.DialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessegeClick: (newMessageBody) => {
            dispatch(sendMessegeCreater(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
    ,withAuthRedirectComponent
)(Dialogs);




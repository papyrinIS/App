import React from 'react';
import n from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return(
        <div className={n.dialog}>
            <NavLink to={"/Dialogs/"+props.id} >{props.name}</NavLink>
        </div>
    )
}



export default Dialog;

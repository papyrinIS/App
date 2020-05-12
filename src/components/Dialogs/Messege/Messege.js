import React from 'react';
import n from "./../Dialogs.module.css";



const Messege = (props) =>{
    return(
        <div className={n.messege}>{props.messege}</div>
    )
}



export default Messege;

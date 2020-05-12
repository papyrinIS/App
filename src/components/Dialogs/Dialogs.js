import React from 'react';
import n from "./Dialogs.module.css";
import Dialog from "./DialogItem/Dialog";
import Messege from "./Messege/Messege";
import Redirect from "react-router-dom/es/Redirect";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControl/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";






const Dialogs = (props) => {


    let dialogsElements = props.DialogsPage.Dialogs.map(dialog=> <Dialog name={dialog.name} id={dialog.id}/>);
    let messegeElemets = props.DialogsPage.Messeges.map(Messeges=><Messege messege={Messeges.name}/>)


    let addNewMessage = (value)=>{
        props.onSendMessegeClick(value.newMessageBody);
    }

    return (
      <div className={n.dialogs}>
        <div className = {n.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={n.masseges}>
            <div>{messegeElemets}</div>
            <DialogsReduxForm onSubmit={addNewMessage}/>
        </div>
      </div>
  )
}
const MaxLength30 = maxLengthCreator(30);

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   validate={[required, MaxLength30]}
                   placeholder={"message"} name={"newMessageBody"}/>
        <div>
            <button>add</button>
        </div>
    </form>
}

const DialogsReduxForm = reduxForm({form: "dialogs"})(DialogsForm);

export default Dialogs;

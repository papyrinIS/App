import React from "react";
import styles from "./FormControl.module.css"
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

export const Textarea =({input, meta, ...props}) => {
    const hasError= meta.touched && meta.error;
    return <div className={ styles.formControl + " " + (hasError ? styles.error :"")}>
        <div>
        <textarea  { ...input} { ...props} />
        </div>
        {hasError && <span className={styles.error}>{meta.error}</span>}
    </div>
}



export const Input =({input, meta:{touched, error }, ...props}) => {
    const hasError= touched && error;
    return <div className={ styles.formControl + " " + (hasError ? styles.error :"")}>
        <div>
            <textarea  { ...input} { ...props} />
        </div>
        {hasError && <span className={styles.error}>{error}</span>}
    </div>
}


export const fields = (placeholder,name,validate,component, props={} ,text ="") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate = {validate}
               component = {component}
               { ...props}
        /> {text}
    </div>
)



import React from "react";
import {reduxForm} from "redux-form";
import {fields, Input} from "../common/FormControl/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Regux/auth-reduser";
import Redirect from "react-router-dom/es/Redirect";
import style from"../common/FormControl/FormControl.module.css"



const Login = ({login,isAuth}) => {
    const onSubmit =(formData) => {
login(formData.email, formData.password, formData.rememberMe);
    }

    if(isAuth){
        return <Redirect to={"/Profile"}/>
    }


    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const maxLength35 = maxLengthCreator(35);

const LoginForm = ({handleSubmit,error}) => {
    return <form onSubmit={handleSubmit}>
        {fields("email","email",[required],"Input")}
        {fields("Password","password",[required],"Input",{ type:"password"})}
        {fields(null,"rememberMe",null,"Input",{ type:"checkbox"},"Remember me")}


        {error && <div className={style.formSumError}>
            {error}
        </div>}
            <div>
                <button>Login</button>
            </div>

        </form>
}
 let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth

 })




const LoginReduxForm = reduxForm ({form : 'login'})(LoginForm);

export default connect(mapStateToProps,{login})(Login);
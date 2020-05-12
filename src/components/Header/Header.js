import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return (
        <header className ={s.Header} >
            <img src = "https://www.indirtik.com/wp-content/uploads/2019/07/logo-maker-transparent-background-4.png" className = {s.logo}></img>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>log out</button></div>
            :<NavLink to={'/login'}>login</NavLink>}
        </div>
        </header>
  )
}

export default Header;

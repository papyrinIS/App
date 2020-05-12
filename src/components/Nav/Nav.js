import React from 'react';
import n from "./Nav.module.css";
import {NavLink} from "react-router-dom";


const Nav = () => {
  return (
      <nav className={n.Nav}>
          <div className={n.item}>
              <NavLink to ="/Profile"> profile </NavLink>
          </div>
          <div className={n.item}>
              <NavLink to = "/Dialogs">dialogs</NavLink>
          </div>
          <div className={n.item}>
              <NavLink to = "/News"> news </NavLink>
          </div>
          <div className={n.item}>
              <NavLink to = "/Music"> music </NavLink>
          </div>
          <div className={n.item}>
              <NavLink to = "/Setting">setting</NavLink>
          </div>
          <div className={n.item}>
              <NavLink to = "/Users">users</NavLink>
          </div>
          <div className={n.item}>
              <NavLink to = "/Messages">messages</NavLink>
          </div>
      </nav>
  )
}

export default Nav;

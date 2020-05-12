import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContaner from "./components/Dialogs/DialogsContaner";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Regux/appReduser";
import Preloader from "./components/common/preloader/Preloader";
import store from "./Regux/redax-store";



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render(){
        if(this.props.init === false){
            return <Preloader/>
        }
    return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/Dialogs" render={()=> <DialogsContaner/>}/>
                    <Route path="/profile/:userId?" render={()=><ProfileContainer/>}/>
                    <Route path="/Users"   render={()=><UsersContainer/>}/>
                    <Route path="/Login" render ={()=> <Login/>}/>
                    <Route path = "/News" component={News}/>
                    <Route path = "/Music" component={Music}/>
                    <Route path = "/Setting" component={Setting}/>
                </div>

        </div>
    );
}}

const mapStateToProps=(state)=>{
    return{
        init: state.app.initialized
    }
}


export default compose(
   /* withRouter,*/
    connect(mapStateToProps,{initializeApp}))(App);


window.store = store;

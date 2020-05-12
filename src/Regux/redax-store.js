import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReduser from "./appReduser"





let redusers = combineReducers({
    ProFilePage:profileReduser,
    DialogsPage:dialogsReduser,
    usersPage:usersReduser,
    app: appReduser,
    auth:authReduser,
    form: formReducer

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(redusers,  composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store;

export default store;


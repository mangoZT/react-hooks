import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import userInfo  from 'reducers/userInfo';
import {combineReducers} from "redux";

let store = createStore(combineReducers({ userInfo }), applyMiddleware(thunkMiddleware));

export default store;
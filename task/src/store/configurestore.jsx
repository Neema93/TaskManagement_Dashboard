import { legacy_createStore as createStore, combineReducers,applyMiddleware} from "redux";
import authReducer from '../reducers/authentication';
import {thunk} from 'redux-thunk';
import authentication from "../reducers/authentication";

export default () => {
   
    const store = createStore(
        combineReducers({

 
            authentication:authentication
            
        }),applyMiddleware(thunk)
    );
    return store;
}
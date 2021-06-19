import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({ counterReducer, authReducer });

export default rootReducer;

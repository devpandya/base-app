import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    auth: authReducer,
  });

export default rootReducer;

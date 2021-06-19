import { combineEpics } from "redux-observable";
import { incrementEpic } from "./counterEpic";

export default combineEpics(incrementEpic);

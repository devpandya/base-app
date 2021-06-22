import { combineEpics } from "redux-observable";
import { incrementEpic } from "./counterEpic";
import { logInRequestedEpic, logInReceivedEpic } from "./authEpic";

const rootRpic = combineEpics(
  incrementEpic,
  logInRequestedEpic,
  logInReceivedEpic
);

export default rootRpic;

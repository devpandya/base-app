import { ofType } from "redux-observable";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import { ERROR_CODES } from "../../Utility/constants";
import * as Actions from "../Actions";

export const logInRequestedEpic = (state$, action$) =>
  action$.pipe(
    ofType(Actions.LOGIN_REQUESTED),
    withLatestFrom(state$),
    map(([action]) => ({
      username: action.username,
      password: action.password,
    })),
    switchMap(({ username, password }) => {
      if (
        username === "dev.pandya.professioanl@gmail.com" &&
        password === "devPandya"
      ) {
        return Actions.loginReceived(username, username, "Dev Pandya");
      } else {
        return Actions.errorReceived(ERROR_CODES[601]);
      }
    })
  );

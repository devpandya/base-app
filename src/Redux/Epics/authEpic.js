import { ofType } from "redux-observable";
import { map } from "rxjs/operators";
import { ERROR_CODES, ROUTES } from "../../Utility/constants";
import * as Actions from "../Actions";
import { push } from "connected-react-router";

export const logInRequestedEpic = (action$) =>
  action$.pipe(
    ofType(Actions.LOGIN_REQUESTED),
    map((action) => {
      if (
        action.username === "dev.pandya.professional@gmail.com" &&
        action.password === "devPandya"
      ) {
        return Actions.loginReceived(
          action.username,
          action.username,
          "Dev Pandya"
        );
      } else {
        return Actions.errorReceived(ERROR_CODES[601]);
      }
    })
  );

export const logInReceivedEpic = (action$) =>
  action$.pipe(
    ofType(Actions.LOGIN_RECEIVED),
    map(() => push(ROUTES.MAIN))
  );

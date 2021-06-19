import { ofType } from "redux-observable";
import { map } from "rxjs/operators";
import * as Actions from "../Actions";

export const incrementEpic = (action$) =>
  action$.pipe(
    ofType(Actions.INCREMENT),
    map(() => Actions.incrementSpecific(1000))
  );

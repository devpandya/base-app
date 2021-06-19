import * as Actions from "../Actions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case Actions.INCREMENT:
      return state + 1;
    case Actions.INCREMENTSPECIFIC:
      return state + action.number;
    case Actions.DECREMENT:
      return state - 1;
    case Actions.RESET:
      return 0;
    default:
      return state;
  }
};
export default counterReducer;

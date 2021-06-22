import * as Actions from "../Actions";

const initalState = { username: "", email: "", name: "", authError: "" };

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case Actions.LOGIN_RECEIVED:
    case Actions.REGISTER_RECEIVED:
      return {
        ...state,
        username: action.username,
        email: action.email,
        name: action.name,
      };
    case Actions.ERROR_RECEIVED:
      return {
        ...state,
        authError: action.error,
      };
    default:
      return { ...state };
  }
};

export default authReducer;

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_RECEIVED = "LOGIN_RECEIVED";
export const REGISTER_REQUESTED = "REGISTER_REQUESTED";
export const REGISTER_RECEIVED = "REGISTER_RECEIVED";
export const FORGOTPASSWORD = "FORGOTPASSWORD";
export const RESETPASSWORD = "RESETPASSWORD";
export const CHANGEPASSWORD = "RESETPASSWORD";
export const ERROR_RECEIVED = "ERROR_RECEIVED";

export const loginRequested = (username, password) => ({
  type: LOGIN_REQUESTED,
  username,
  password,
});

export const loginReceived = (username, email, name) => ({
  type: LOGIN_RECEIVED,
  username,
  email,
  name,
});

export const registerRequested = (username, email, name) => ({
  type: REGISTER_REQUESTED,
  username,
  email,
  name,
});

export const registerReceived = (username, email, name) => ({
  type: REGISTER_RECEIVED,
  username,
  email,
  name,
});

export const forgotPassword = (email) => ({
  type: FORGOTPASSWORD,
  email,
});

export const resetPassword = (otp, newPassword) => ({
  type: RESETPASSWORD,
  otp,
  newPassword,
});

export const changePassword = (newPassword) => ({
  type: CHANGEPASSWORD,
  newPassword,
});

export const errorReceived = (error) => ({
  type: ERROR_RECEIVED,
  error,
});

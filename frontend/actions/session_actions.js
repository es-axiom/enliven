export const SessionConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const signup = currentUser => ({
  type: SessionConstants.SIGNUP,
  currentUser
});

export const login = currentUser => ({
  type: SessionConstants.LOGIN,
  currentUser
});

export const logout = () => ({
  type: SessionConstants.LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});

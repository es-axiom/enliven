import { receiveCurrentUser, receiveErrors, SessionConstants }
  from '../actions/session_actions';
import { login, signup, logout }
  from '../util/session_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCB = user => dispatch(receiveCurrentUser(user));
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type) {
    case SessionConstants.LOGIN:
      login(action.user, successCB, errorCB);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

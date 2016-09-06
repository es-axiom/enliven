import { receiveUserTeams, receiveErrors, UserConstants }
  from '../actions/user_actions';

import { fetchUserTeams } from '../util/user_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCB = userTeams => dispatch(receiveUserTeams(userTeams));
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type) {
    case UserConstants.FETCH_USER_TEAMS:
      fetchUserTeams(action.user, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

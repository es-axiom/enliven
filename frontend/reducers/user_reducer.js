import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUserTeams = Object.freeze({
  userTeams: null,
  errors: []
});

const UserReducer = (state = _nullUserTeams, action) => {
  switch(action.type) {
    case UserConstants.RECEIVE_USER_TEAMS:
      const userTeams = action.userTeams;
      return merge({}, _nullUserTeams, { userTeams });
    case UserConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUserTeams, { errors });
    default:
      return state;
  }
};

export default UserReducer;

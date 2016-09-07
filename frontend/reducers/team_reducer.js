import { TeamConstants } from '../actions/team_actions';
import merge from 'lodash/merge';

const _nullTeam = Object.freeze({
  userTeams: null,
  errors: []
});

const TeamReducer = (state = _nullTeam, action) => {
  switch(action.type) {
    case TeamConstants.RECEIVE_USER_TEAMS:
      const userTeams = action.teams;
      return merge({}, _nullTeam, { userTeams });
    case TeamConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullTeam, { errors });
    default:
      return state;
  }
};

export default TeamReducer;

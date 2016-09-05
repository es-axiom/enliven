import { TeamConstants } from '../actions/team_actions';
import merge from 'lodash/merge';

const _nullTeam = Object.freeze({
  currentTeam: null,
  errors: []
});

const TeamReducer = (state = _nullTeam, action) => {
  switch(action.type) {
    case TeamConstants.RECEIVE_CURRENT_TEAM:
      const currentTeam = action.currentTeam;
      return merge({}, _nullTeam, { currentTeam });
    case TeamConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullTeam, { errors });
    default:
      return state;
  }
};

export default TeamReducer;

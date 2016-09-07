import { TeamConstants } from '../actions/team_actions';
import merge from 'lodash/merge';

const _nullTeam = Object.freeze({
  userTeams: null,
  currentTeam: null,
  errors: []
});

const TeamReducer = (state = _nullTeam, action) => {
  switch(action.type) {
    case TeamConstants.RECEIVE_CURRENT_TEAM:
      let currentTeam = action.team;
      let userTeams = this.state.userTeams;
      return merge({}, _nullTeam, { userTeams, currentTeam });
    case TeamConstants.RECEIVE_USER_TEAMS:
      userTeams = action.teams;
      currentTeam = this.state.currentTeam;
      return merge({}, _nullTeam, { userTeams, currentTeam });
    case TeamConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullTeam, { errors });
    default:
      return state;
  }
};

export default TeamReducer;

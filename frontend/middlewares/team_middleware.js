import { receiveUserTeams, receiveCurrentTeam, receiveErrors, TeamConstants }
  from '../actions/team_actions';
import fetchUserTeams from '../util/team_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCB = teams => dispatch(receiveUserTeams(teams));
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch (action.type) {
    case TeamConstants.FETCH_USER_TEAMS:
      fetchUserTeams(successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

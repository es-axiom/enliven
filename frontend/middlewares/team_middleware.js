import { receiveCurrentTeam, receiveErrors, TeamConstants }
  from '../actions/team_actions';
import { fetchTeam } from '../util/team_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCB = team => dispatch(receiveCurrentTeam(team));
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch (action.type) {
    case TeamConstants.FETCH_TEAM:
      fetchTeam(action.team, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

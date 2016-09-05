import { receiveCurrentTeam, receiveErrors } from '../actions/team_actions';

export const fetchTeam = (team, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/teams/${team}`,
    success,
    error
  });
};

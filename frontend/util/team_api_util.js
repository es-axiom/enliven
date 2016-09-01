import { receiveCurrentTeam, receiveErrors } from '../actions/team_actions';

export const fetchTeam = (team_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/teams/{team_id}'
  });
};

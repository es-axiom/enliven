import { receiveCurrentTeam, receiveErrors } from '../actions/team_actions';

export const fetchTeam = (team, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/teams/1`,
    success,
    error
  });
};

//TODO: Finish out team_api_utils
//NOTE: fetch Team info, user's teams fetched in user util

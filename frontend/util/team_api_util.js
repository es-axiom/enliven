import { receiveUserTeams, receiveErrors } from '../actions/team_actions';

const fetchUserTeams = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/teams',
    success,
    error
  });
};

export default fetchUserTeams;

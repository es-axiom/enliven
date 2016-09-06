import { receiveUserTeams, receiveErrors } from '../actions/user_actions';

export const fetchUserTeams = (user, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/teams',
    data: { user: user },
    success,
    error
  });
};

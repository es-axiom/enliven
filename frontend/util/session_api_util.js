import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user,
    success,
    error
  });
};

export const signup = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user,
    success,
    error
  });
};

export const logout = (success) => {
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user,
    success,
    error: () => {
      console.log("logout error in SessionApiUtil#logout");
    }
  });
};

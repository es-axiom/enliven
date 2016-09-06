import { receiveUserDMChats } from '../actions/dm_chat_actions';

export const fetchUserDMChats = (success, error) => {
  $.ajax ({
    method: 'GET',
    url: '/api/dm_chats',
    success,
    error
  });
};

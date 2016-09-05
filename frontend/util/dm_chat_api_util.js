import { receiveDMChat, receiveUserDMChats } from '../actions/dm_chat_actions';

export const fetchDM = (dm_id, success, error) => {
  $.ajax ({
    method: 'GET',
    url: `/api/dm_chats/${dm_id}`,
    success,
    error
  });
};

export const fetchUserDMChats = (success, error) => {
  $.ajax ({
    method: 'GET',
    url: '/api/dm_chats',
    success,
    error
  });
};

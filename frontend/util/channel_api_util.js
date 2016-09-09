import { receiveChatMessages, receiveTeamChannels }
  from '../actions/channel_actions';

export const fetchChannels = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/channels',
    success,
    error
  });
};

export const fetchChatMessages = (channel_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/channels',
    data: { channel_id },
    success,
    error
  });
};

export const postMessage = (message, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: { msg: message },
    success,
    error
  });
};

export const createChannel = (channel_id, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: channel_id,
    success,
    error
  });
};

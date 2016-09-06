import { receiveTeamChannels } from '../actions/channel_actions';
import { receiveChatMessages } from '../actions/channel_actions';

export const fetchTeamChannels = (team_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/channels',
    data: { team_id: team_id },
    success,
    error
  });
};

export const fetchChatMessages = (channel_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/channels',
    data: { info: 1 },
    success,
    error
  });
};

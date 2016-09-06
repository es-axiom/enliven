import { receiveTeamChannels, receiveChatMessages, receiveErrors, ChannelConstants }
  from '../actions/channel_actions';
import { fetchTeamChannels, fetchChatMessages } from '../util/channel_api_util';

export default ({ getState, dispatch }) => next => action => {
  const channelsSuccessCB = teamChannels => dispatch(receiveTeamChannels(teamChannels));
  const chatSuccessCB = messages => dispatch(receiveChatMessages(messages));
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type) {
    case ChannelConstants.FETCH_TEAM_CHANNELS:
      fetchTeamChannels(action.team_id, channelsSuccessCB, errorCB);
      return next(action);
    case ChannelConstants.FETCH_CHAT_MESSAGES:
      fetchChatMessages(action.channel_id, chatSuccessCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

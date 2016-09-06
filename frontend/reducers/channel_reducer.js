import { ChannelConstants } from '../actions/channel_actions';
import merge from 'lodash/merge';

const _nullData = Object.freeze({
  teamChannels: null,
  messages: null,
  errors: []
});

const ChannelReducer = (state = _nullData, action) => {
  switch(action.type) {
    case ChannelConstants.RECEIVE_TEAM_CHANNELS:
      const teamChannels = action.teamChannels;
      return merge({}, _nullData, { teamChannels });
    case ChannelConstants.RECEIVE_CHAT_MESSAGES:
      const messages = action.messages;
      debugger;
      return merge({}, _nullData, { messages });
    case ChannelConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullData, { errors });
    default:
      return state;
  }
};

export default ChannelReducer;

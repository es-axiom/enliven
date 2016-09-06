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
      let teamChannels = action.teamChannels;
      let messages = state.messages;
      return merge({}, _nullData, { teamChannels, messages });
    case ChannelConstants.RECEIVE_CHAT_MESSAGES:
      messages = action.messages;
      teamChannels = state.teamChannels;
      return merge({}, _nullData, { teamChannels, messages });
    case ChannelConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullData, { errors });
    default:
      return state;
  }
};

export default ChannelReducer;

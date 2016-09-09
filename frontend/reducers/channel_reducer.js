import { ChannelConstants } from '../actions/channel_actions';
import merge from 'lodash/merge';


const _nullData = Object.freeze({
  channels: null,
  messages: null,
  currentChannel: null,
  errors: []
});

const ChannelReducer = (state = _nullData, action) => {
  switch(action.type) {
    case ChannelConstants.RECEIVE_CHANNELS:
      let channels = action.channels;
      let channelArr = [];
      if(channels) {
        channelArr = Object.keys(channels).map( key => {
          return channels[key];
        });
      }
      let currentChannel = channelArr[0];
      return merge({}, state, { currentChannel, channels });
    case ChannelConstants.RECEIVE_CHAT_MESSAGES:
      let messages = action.messages;
      state.messages = null;
      return merge({}, state, { messages });
    case ChannelConstants.RECEIVE_CURRENT_CHANNEL:
      currentChannel = action.channel;
      return merge({}, state, { currentChannel });
    case ChannelConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default ChannelReducer;

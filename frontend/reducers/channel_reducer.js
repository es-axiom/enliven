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
      return merge({}, state, { channels });
    case ChannelConstants.RECEIVE_CHAT_MESSAGES:
      state.messages = null;
      let messages = action.messages;
      return merge({}, state, { messages });
    case ChannelConstants.RECEIVE_CURRENT_CHANNEL:
      if(action.channel === 0){
        return merge({}, state);
      }
      let currentChannel = action.channel ? action.channel : 1;
      return merge({}, state, { currentChannel });
    case ChannelConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default ChannelReducer;

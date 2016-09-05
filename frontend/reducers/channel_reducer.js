import { ChannelConstants } from '../actions/channel_actions';
import merge from 'lodash/merge';

const _nullChannels = Object.freeze({
  teamChannels: null,
  errors: []
});

const ChannelReducer = (state = _nullChannels, action) => {
  switch(action.type) {
    case ChannelConstants.RECEIVE_TEAM_CHANNELS:
      const teamChannels = action.teamChannels;
      return merge({}, _nullChannels, { teamChannels });
    case ChannelConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullChannels, { errors });
    default:
      return state;
  }
};

export default ChannelReducer;

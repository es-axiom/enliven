import { receiveTeamChannels, receiveErrors, ChannelConstants }
  from '../actions/channel_actions';
import { fetchTeamChannels } from '../util/channel_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCB = teamChannels => dispatch(receiveTeamChannels(teamChannels));
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type) {
    case ChannelConstants.FETCH_TEAM_CHANNELS:
      fetchTeamChannels(action.team_id, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

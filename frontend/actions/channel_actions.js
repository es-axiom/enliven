export const ChannelConstants = {
  FETCH_TEAM_CHANNELS: "FETCH_TEAM_CHANNELS",
  RECEIVE_TEAM_CHANNELS: "RECEIVE_TEAM_CHANNELS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchTeamChannels = team_id => ({
  type: ChannelConstants.FETCH_TEAM_CHANNELS,
  team_id
});

export const receiveTeamChannels = teamChannels => ({
  type: ChannelConstants.RECEIVE_TEAM_CHANNELS,
  teamChannels
});

export const receiveErrors = errors => ({
  type: ChannelConstants.RECEIVE_ERRORS,
  errors
});

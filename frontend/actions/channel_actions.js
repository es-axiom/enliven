export const ChannelConstants = {
  FETCH_CHANNELS: "FETCH_CHANNELS",
  RECEIVE_CHANNELS: "RECEIVE_TEAM_CHANNELS",
  FETCH_CHAT_MESSAGES: "FETCH_CHAT_MESSAGES",
  RECEIVE_CHAT_MESSAGES: "RECEIVE_CHAT_MESSAGES",
  RECEIVE_CURRENT_CHANNEL: "RECEIVE_CURRENT_CHANNEL",
  POST_MESSAGE: "POST_MESSAGE",
  CREATE_CHANNEL: "CREATE_CHANNEL",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchChannels = () => ({
  type: ChannelConstants.FETCH_CHANNELS
});

export const receiveChannels = channels => ({
  type: ChannelConstants.RECEIVE_CHANNELS,
  channels
});

export const receiveCurrentChannel = channel => ({
  type: ChannelConstants.RECEIVE_CURRENT_CHANNEL,
  channel
});

export const createChannel = channel => ({
  type: ChannelConstants.CREATE_CHANNEL,
  channel
});

export const receiveErrors = errors => ({
  type: ChannelConstants.RECEIVE_ERRORS,
  errors
});

export const fetchChatMessages = channel_id => ({
  type: ChannelConstants.FETCH_CHAT_MESSAGES,
  channel_id
});

export const receiveChatMessages = messages => ({
  type: ChannelConstants.RECEIVE_CHAT_MESSAGES,
  messages
});

export const postMessage = message => ({
  type: ChannelConstants.POST_MESSAGE,
  message
});

import { receiveChannels, receiveChatMessages, receiveErrors, ChannelConstants }
  from '../actions/channel_actions';
import { fetchChannels, fetchChatMessages, createChannel, postMessage }
  from '../util/channel_api_util';

export default ({ getState, dispatch }) => next => action => {
  const channelsSuccessCB = channels => dispatch(receiveChannels(channels));
  const chatSuccessCB = messages => dispatch(receiveChatMessages(messages));
  //HACK: below
  const createSuccessCB = () => console.log('channel created');
  const postSuccessCB = (messages) => dispatch(receiveChatMessages(messages));
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type) {
    case ChannelConstants.FETCH_CHANNELS:
      fetchChannels(channelsSuccessCB, errorCB);
      return next(action);
    case ChannelConstants.FETCH_CHAT_MESSAGES:
      fetchChatMessages(action.channel_id, chatSuccessCB, errorCB);
      return next(action);
    case ChannelConstants.POST_MESSAGE:
      postMessage(action.message, postSuccessCB, errorCB);
      return next(action);
    case ChannelConstants.DELETE_MESSAGE:
      deleteMessage(action.message_id, postSuccessCB, errorCB);
      return next(action);
    case ChannelConstants.CREATE_CHANNEL:
      createChannel(action.channel, createSuccessCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

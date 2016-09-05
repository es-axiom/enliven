import { receiveDMChat, receiveUserDMChats, receiveErrors, DMChatConstants }
  from '../actions/dm_chat_actions';

import { fetchDM, fetchUserDMChats } from '../util/dm_chat_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCB = dmChat => dispatch(receiveDMChat(dmChat));
  const successCBMulti = dmChats => dispatch(receiveUserDMChats(dmChats));
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type) {
    case DMChatConstants.FETCH_DM:
      fetchDM(action.dm_id, successCB, errorCB);
      return next(action);
    case DMChatConstants.FETCH_USER_DM_CHATS:
      fetchUserDMChats(successCBMulti, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

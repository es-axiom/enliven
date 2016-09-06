import { receiveUserDMChats, receiveErrors, DMChatConstants }
  from '../actions/dm_chat_actions';

import { fetchUserDMChats } from '../util/dm_chat_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCB = dmChats => dispatch(receiveUserDMChats(dmChats));
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type) {
    case DMChatConstants.FETCH_USER_DM_CHATS:
      fetchUserDMChats(successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

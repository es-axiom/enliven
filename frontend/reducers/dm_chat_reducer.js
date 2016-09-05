import { DMChatConstants } from '../actions/dm_chat_actions';
import merge from 'lodash/merge';

const _nullDMChats = Object.freeze ({
  userDMChats: null,
  errors: []
});

const DMChatReducer = (state = _nullDMChats, action) => {
  switch(action.type) {
    case DMChatConstants.RECEIVE_USER_DM_CHATS:
      let userDMChats = action.dm_chats;
      return merge({}, _nullDMChats, { userDMChats });
    case DMChatConstants.RECEIVE_DM_CHAT:
      userDMChats = action.dm_chats;
      return merge({}, _null, { userDMChats });
    default:
      return state;
  }
};

export default DMChatReducer;

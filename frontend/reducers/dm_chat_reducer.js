import { DMChatConstants } from '../actions/dm_chat_actions';
import merge from 'lodash/merge';

const _nullDMChats = Object.freeze ({
  userDMChats: null,
  errors: []
});

const DMChatReducer = (state = _nullDMChats, action) => {
  switch(action.type) {
    case DMChatConstants.RECEIVE_USER_DM_CHATS:
      let userDMChats = action.dmChats;
      return merge({}, _nullDMChats, { userDMChats });
    default:
      return state;
  }
};

export default DMChatReducer;

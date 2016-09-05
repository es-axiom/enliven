export const DMChatConstants = {
  FETCH_DM: "FETCH_DM",
  FETCH_USER_DM_CHATS: "FETCH_USER_DM_CHATS",
  RECEIVE_DM_CHAT: "RECEIVE_DM_CHAT",
  RECEIVE_USER_DM_CHATS: "RECEIVE_USER_DM_CHATS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchDM = dm_id => ({
  type: DMChatConstants.FETCH_DM,
  dm_id
});

export const fetchUserDMChats = () => ({
  type: DMChatConstants.FETCH_USER_DM_CHATS,
});

export const receiveDMChat = dm_chat => ({
  type: DMChatConstants.RECEIVE_DM_CHAT,
  dm_chat
});

export const receiveUserDMChats = dm_chats => ({
  type: DMChatConstants.RECEIVE_USER_DM_CHATS,
  dm_chats
});

export const receiveErrors = errors => ({
  type: DMChatConstants.RECEIVE_ERRORS,
  errors
});

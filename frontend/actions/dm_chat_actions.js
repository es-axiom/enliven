export const DMChatConstants = {
  FETCH_USER_DM_CHATS: "FETCH_USER_DM_CHATS",
  FETCH_DM_MESSAGES: "FETCH_DM_MESSAGES",
  RECEIVE_USER_DM_CHATS: "RECEIVE_USER_DM_CHATS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchUserDMChats = () => ({
  type: DMChatConstants.FETCH_USER_DM_CHATS,
});

export const fetchDmMessages = (dm_id) => ({
  type: DMChatConstants.FETCH_DM_MESSAGES,
  dm_id
});

export const receiveUserDMChats = dmChats => ({
  type: DMChatConstants.RECEIVE_USER_DM_CHATS,
  dmChats
});

export const receiveErrors = errors => ({
  type: DMChatConstants.RECEIVE_ERRORS,
  errors
});

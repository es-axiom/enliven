export const DMChatConstants = {
  FETCH_USER_DM_CHATS: "FETCH_USER_DM_CHATS",
  RECEIVE_USER_DM_CHATS: "RECEIVE_USER_DM_CHATS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchUserDMChats = () => ({
  type: DMChatConstants.FETCH_USER_DM_CHATS,
});

export const receiveUserDMChats = dmChats => ({
  type: DMChatConstants.RECEIVE_USER_DM_CHATS,
  dmChats
});

export const receiveErrors = errors => ({
  type: DMChatConstants.RECEIVE_ERRORS,
  errors
});

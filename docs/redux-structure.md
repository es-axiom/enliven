# REDUX STRUCTURE #

## Auth Cycles: ##

###Session API Request Actions:###

* signUp
  1. invoked from SignupForm onSubmit
  2. POST /api/users
  3. receiveCurrentUser is the success callback

* login
  1. invoked from Sign-inForm onSubmit
  2. POST /api/session
  3. receiveCurrentUser is the success callback

* logout
  1. invoked from the header onSubmit
  2. DELETE /api/session

###Session API Response Actions:###

* receiveCurrentUser
  1. invoked from API callback

* removeCurrentUser
  1. invoked from API callback
  2. SessionReducer removes currentUser from app state

## Message Cycles ##

###Messages API Request Actions###

* createMessage
  1. invoked from onSubmit of MessageForm
  2. POST /api/channels/:id/messages
    _OR_
    POST /api/DM_chats/:id/messages
  3. receiveMessage is the success callback

* destroyMessage
  1. invoked from delete button onClick
  2. DELETE /api/channels/:id/messages/:id
    _OR_
    DELETE /api/DM_chats/:id/messages/:id
  3. removeMessage is the success callback

###Messages API Response Actions###

* receiveMessage
  1. invoked from API callback
  2. the MessageReducer adds message to state

* removeMessage
  1. invoked from API callback
  2. the MessagesReducer removes message from app state

## Channel Cycles ##

###Channels API Request Actions###

* fetchTeamChannels
  1. invoked from Team didMount
  2. GET /api/channels/teams/:id
  3. receiveAllChannels is the success callback

* updateChannel
  1. invoked from UpdateChannelForm onClick
  2. PATCH /api/channels/:id
  3. receiveChannel is the success callback

* destroyChannel
  1. invoked from delete button onClick in UpdateChannelForm
  2. DELETE /api/channels/:id
  3. removeChannel is the success callback

###Channels API Response Actions###

* receiveTeamChannels
  1. invoked from API callback
  2. the ChannelsReducer updates channels in app state

* removeChannel
  1. invoked from API callback
  2. the ChannelsReducer removes channel from app state


## DM_Chat Cycles ##

###DM_Chats API Request Actions###

* fetchUserDM_Chats
  1. invoked from Team didMount
  2. GET /api/DM_chats/user/:id
  3. receiveAllDM_Chats is the success callback

* destroyDM_Chat
  1. invoked from delete button in DM_Chat
  2. DELETE /api/DM_chats/:id
  3. removeDM_Chat is the success callback

###DM_Chats API Response Actions###

* receiveUserDM_Chats
  1. invoked from API callback
  2. the DM_ChatsReducer updates the DM_Chats in app state

* removeDM_Chat
  1. invoked from API callback
  2. the DM_ChatsReducer removes the DM_Chat from app state

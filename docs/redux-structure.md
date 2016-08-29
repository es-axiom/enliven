## REDUX STRUCTURE ##

## Auth Cycles:

Session API Request Actions:

-> signUp
  - invoked from SignupForm onSubmit
  - POST /api/users
  - receiveCurrentUser is the success callback

-> sign-in
  - invoked from Sign-inForm onSubmit
  - POST /api/session
  - receiveCurrentUser is the success callback

-> sign-out
  - invoked from the header onSubmit
  - DELETE /api/session

-> getCurrentUser
  - invoked by App
  - GET /api/session
  - receiveCurrentUser is the success callback

Session API Response Actions:

-> receiveCurrentUser
  - invoked from API callback

-> removeCurrentUser
  - invoked from API callback
  - SessionReducer removes currentUser from app state

## Message Cycles

Messages API Request Actions

-> fetchAllMessages
  - invoked from Channel or DMChat didMount/willReceiveProps
  - GET /api/channels/:id/messages
    OR
    GET /api/DM_chats/:id/messages
  - receiveAllMessages is the success callback

-> createMessage
  - invoked from onSubmit of MessageForm
  - POST /api/channels/:id/messages
    OR
    POST /api/DM_chats/:id/messages
  - receiveMessage is the success callback

-> destroyMessage
  - invoked from delete button onClick
  - DELETE /api/channels/:id/messages/:id
    OR
    DELETE /api/DM_chats/:id/messages/:id
  - removeMessage is the success callback

Messages API Response Actions

-> receiveAllMessages
  - invoked from API callback
  - the MessagesReducer updates Messages in app state

-> removeMessage
  - invoked from API callback
  - the MessagesReducer removes message from app state

## Channel Cycles

Channels API Request Actions

-> fetchAllChannels
  - invoked from Team didMount
  - GET /api/channels
  - receiveAllChannels is the success callback

-> fetchChannel
  - invoked from ChannelIndex onClick
  - GET /api/channels/:id
  - receiveChannel is the success callback

-> updateChannel
  - invoked from UpdateChannelForm onClick
  - PATCH /api/channels/:id
  - receiveChannel is the success callback

-> destroyChannel
  - invoked from delete button onClick in UpdateChannelForm
  - DELETE /api/channels/:id
  - removeChannel is the success callback

Channels API Response Actions

-> receiveAllChannels
  - invoked from API callback
  - the ChannelsReducer updates channels in app state

-> receiveChannel
  - invoked from API callback
  - the ChannelsReducers updates channel in app state

-> removeChannel
  - invoked from API callback
  - the ChannelsReducer removes channel from app state


## DM_Chat Cycles

DM_Chats API Request Actions

-> fetchAllDM_Chats
  - invoked from Team didMount
  - GET /api/DM_chats
  - receiveAllDM_Chats is the success callback

-> fetchDM_Chat
  - invoked from DM_Chat onClick
  - GET /api/DM_chats/:id
  - receiveDM_Chat is the success callback

-> destroyDM_Chat
  - invoked from delete button in DM_Chat
  - DELETE /api/DM_chats/:id
  - removeDM_Chat is the success callback

DM_Chats API Response Actions

-> receiveAllDM_Chats
  - invoked from API callback
  - the DM_ChatsReducer updates the DM_Chats in app state

-> receiveDM_Chat
  - invoked from API callback
  - the DM_ChatsReducer updates the DM_Chat in app state

-> removeDM_Chat
  - invoked from API callback
  - the DM_ChatsReducer removes the DM_Chat from app state

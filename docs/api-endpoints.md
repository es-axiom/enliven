#API Endpoints#

##HTML API##

###Root###
*GET / -> loads React app

##JSON API##

###Users###
*GET /api/users
*POST /api/users

###Session###
*POST /api/session
*DELETE /api/session/:id
*GET /api/session

###Teams###
*GET /api/teams
*POST /api/teams
*PATCH /api/teams/:id
*DELETE /api/teams/:id
*GET /api/teams/:id/channels
  -return all channels in team

###Channels###
*GET /api/channels
*POST /api/channels
*PATCH /api/channels/:id
*DELETE /api/channels/:id
*GET /api/channels/:id/messages
  -return all messages in channel

###DM Chats###
*GET /api/DM_chats
*POST /api/DM_chats
*DELETE /api/DM_chats/:id
*GET /api/DM_chats/:id/messages
  -return all messages in DM

###Messages###
*GET /api/messages
*POST /api/messages
*DELETE /api/messages/:id

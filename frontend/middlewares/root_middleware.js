import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import TeamMiddleware from './team_middleware';
import ChannelMiddleware from './channel_middleware';
import DMChatMiddleware from './dm_chat_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TeamMiddleware,
  ChannelMiddleware,
  DMChatMiddleware
);

export default RootMiddleware;

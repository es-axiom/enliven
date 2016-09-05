import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import TeamMiddleware from './team_middleware';
import ChannelMiddleware from './channel_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TeamMiddleware,
  ChannelMiddleware
);

export default RootMiddleware;

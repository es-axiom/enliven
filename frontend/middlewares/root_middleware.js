import { applyMiddleware } from 'redux';

import SessionMiddleware from './session_middleware';
import TeamMiddleware from './team_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TeamMiddleware
);

export default RootMiddleware;

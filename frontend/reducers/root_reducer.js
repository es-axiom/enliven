import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamReducer from './team_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer,
  team: TeamReducer
});

export default RootReducer;

import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamReducer from './team_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer
});

export default RootReducer;

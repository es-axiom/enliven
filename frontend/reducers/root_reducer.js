import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamReducer from './team_reducer';
import ChannelsReducer from './channel_reducer';
import DMChatReducer from './dm_chat_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer,
  team: TeamReducer,
  teamChannels: ChannelsReducer,
  userChats: DMChatReducer
});

export default RootReducer;

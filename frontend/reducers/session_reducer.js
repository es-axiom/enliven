import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state, action) => {
  debugger
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      const user = action.currentUser;
      debugger;
      return merge({}, _nullUser, { user } );
    case SessionConstants.LOGOUT:
      console.log('hit it');
      return merge({}, _nullUser);
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, { errors });
    default:
      return state;
  }
};

export default SessionReducer;

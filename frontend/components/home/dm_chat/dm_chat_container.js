import { connect } from 'react-redux';
import DMChatIndex from './dm_chat_index';
import { fetchUserDMChats } from '../../../actions/dm_chat_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  userChats: state.userChats.userDMChats
});

const mapDispatchToProps = dispatch => ({
  fetchUserDMChats: (user) => dispatch(fetchUserDMChats(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DMChatIndex);

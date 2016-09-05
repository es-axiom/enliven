import { connect } from 'react-redux';
import DMChatIndex from './dm_chat_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(DMChatIndex);

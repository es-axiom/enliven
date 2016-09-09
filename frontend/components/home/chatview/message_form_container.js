import { connect } from 'react-redux';
import MessageForm from './message_form';
import { postMessage } from '../../../actions/channel_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channel.currentChannel
});

const mapDispatchToProps = dispatch => ({
  postMessage: message => dispatch(postMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);

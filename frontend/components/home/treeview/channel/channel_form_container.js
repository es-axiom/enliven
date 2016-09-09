import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel } from '../../../../actions/channel_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.channel.errors
});

const mapDispatchToProps = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);

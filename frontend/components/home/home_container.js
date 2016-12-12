import { connect } from 'react-redux';
import Home from './home';
import { fetchUserDMChats } from '../../actions/dm_chat_actions';
import { fetchChannels, receiveCurrentChannel, fetchChatMessages } from '../../actions/channel_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channel.currentChannel,
  chatMessages: state.channel.messages,
  channels: state.channel.channels
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentChannel: (channel) => dispatch(receiveCurrentChannel(channel)),
  fetchChannels: () => dispatch(fetchChannels()),
  fetchUserDMChats: () => dispatch(fetchUserDMChats()),
  fetchChatMessages: (channel_id) => dispatch(fetchChatMessages(channel_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

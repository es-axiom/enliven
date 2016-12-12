import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels, receiveCurrentChannel, fetchChatMessages }
  from '../../../../actions/channel_actions';

const mapStateToProps = state => ({
  channels: state.channel.channels,
  currentChannel: state.channel.currentChannel,
  chatMessages: state.channel.messages
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentChannel: (channel) => dispatch(receiveCurrentChannel(channel)),
  fetchChatMessages: (channel_id) => dispatch(fetchChatMessages(channel_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);

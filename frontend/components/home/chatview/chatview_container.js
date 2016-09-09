import React from 'react';
import ChatView from './chatview';
import { connect } from 'react-redux';
import { fetchChatMessages, receiveMessage, receiveCurrentChannel }
  from '../../../actions/channel_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channel.currentChannel,
  chatMessages: state.channel.messages
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentChannel: () => dispatch(receiveCurrentChannel(0))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ChatView);

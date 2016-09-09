import React from 'react';
import ChatView from './chatview';
import { connect } from 'react-redux';
import { fetchChatMessages, receiveMessage } from '../../../actions/channel_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channel.currentChannel,
  chatMessages: state.channel.messages
});

export default connect (
  mapStateToProps
)(ChatView);

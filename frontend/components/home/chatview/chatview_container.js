import React from 'react';
import ChatView from './chatview';
import { connect } from 'react-redux';
import { fetchChatMessages } from '../../../actions/channel_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  chatMessages: state.teamChannels.messages
});

const mapDispatchToProps = dispatch => ({
  fetchChatMessages: channel_id => dispatch(fetchChatMessages(channel_id))
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ChatView);

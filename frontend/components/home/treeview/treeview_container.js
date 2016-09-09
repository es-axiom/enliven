import React from 'react';
import TreeView from './treeview';
import { connect } from 'react-redux';
import { fetchChannels } from '../../../actions/channel_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  channels: state.channel.channels
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels())
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TreeView);

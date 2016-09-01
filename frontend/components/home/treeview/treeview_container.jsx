import React from 'react';
// import ChannelsContainer from './channels/channels_container';
//TODO: import ChannelsContainer
import TreeView from './treeview';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.session.currentUser
})

export default connect (
  mapStateToProps
)(TreeView);

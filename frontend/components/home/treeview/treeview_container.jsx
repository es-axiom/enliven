import React from 'react';
import TreeView from './treeview';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentTeam: state.session.currentTeam
})

export default connect (
  mapStateToProps
)(TreeView);

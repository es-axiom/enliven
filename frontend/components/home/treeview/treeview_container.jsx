import React from 'react';
import TreeView from './treeview';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.session.currentUser
})

export default connect (
  mapStateToProps
)(TreeView);

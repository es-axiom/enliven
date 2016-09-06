import React from 'react';
import ChatView from './chatview';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


export default connect (
  mapStateToProps
)(ChatView);

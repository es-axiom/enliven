import React from 'react';
import { connect } from 'react-redux';
import DmModal from './dm_modal';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  dmMessages: (chat_id) => dispatch(fetchDmMessages)
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(DmModal);

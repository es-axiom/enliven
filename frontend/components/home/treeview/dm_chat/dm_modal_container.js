import React from 'react';
import { connect } from 'react-redux';
import DmModal from './dm_modal';
import { fetchDmMessages } from '../../../../actions/dm_chat_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  dmMessages: (chat_id) => dispatch(fetchDmMessages(chat_id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(DmModal);

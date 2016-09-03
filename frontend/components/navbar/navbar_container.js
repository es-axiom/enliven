import { connect } from 'react-redux';
import React from 'react';
import NavbarContent from './navbar_content';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NavbarContent);

import React from 'react';
import { connect } from 'react-redux';
import AboutDetails from './about_details';

const mapStateToProps = state => ({
  currentUser: state.session.user
});

export default connect (
  mapStateToProps
)(AboutDetails);

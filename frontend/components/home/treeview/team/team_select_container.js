import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentTeam: state.team.currentTeam
});

export default connect (
  mapStateToProps
)(TeamSelect);

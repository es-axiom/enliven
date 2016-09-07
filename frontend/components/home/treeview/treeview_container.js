import React from 'react';
import TreeView from './treeview';
import { connect } from 'react-redux';
import { receiveCurrentTeam } from '../../../actions/team_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  userTeams: state.team.userTeams
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentTeam: team => dispatch(receiveCurrentTeam(team))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TreeView);

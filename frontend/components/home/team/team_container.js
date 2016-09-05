import { connect } from 'react-redux';
import TeamDetails from './team_details';
import { fetchTeam } from '../../../actions/team_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentTeam: state.team.currentTeam
});

const mapDispatchToProps = dispatch => ({
  fetchTeam: team => dispatch(fetchTeam(team))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamDetails);

import { connect } from 'react-redux';
import TeamDetails from './team_details';
import { fetchTeam } from '../../../actions/team_actions';
import { receiveCurrentTeam } from '../../../reducers/team_reducer';

const mapStateToProps = state => ({
  team: state.team.team,
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentTeam: team => dispatch(fetchTeam(team))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamDetails);

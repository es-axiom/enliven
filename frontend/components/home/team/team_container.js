import { connect } from 'react-redux';
import TeamDetails from './team_details';
import { fetchTeam } from '../../../actions/team_actions';
import { receiveCurrentTeam } from '../../../reducers/team_reducer';

const mapStateToProps = state => ({
  team: state.team.team
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentTeam: () => dispatch(fetchTeam(1))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamDetails);

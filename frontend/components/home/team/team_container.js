import { connect } from 'react-redux';
import TeamDetails from './team_details';
import { fetchTeam } from '../../../actions/team_actions';
import { receiveCurrentTeam } from '../../../reducers/team_reducer';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(TeamDetails);

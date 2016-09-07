import { connect } from 'react-redux';
import TeamDetails from './team_details';
import { fetchTeamChannels } from '../../../actions/team_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

export default connect(
  mapStateToProps
)(TeamDetails);

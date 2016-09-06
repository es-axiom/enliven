import { connect } from 'react-redux';
import TeamDetails from './team_details';
import { fetchUserTeams } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  userTeams: state.user.userTeams
});

const mapDispatchToProps = dispatch => ({
  fetchUserTeams: user => dispatch(fetchUserTeams(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamDetails);

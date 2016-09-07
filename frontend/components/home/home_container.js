import { connect } from 'react-redux';
import Home from './home';
import { fetchUserTeams } from '../../actions/team_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  userTeams: state.team.userTeams
});

const mapDispatchToProps = dispatch => ({
  fetchUserTeams: () => dispatch(fetchUserTeams())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

import { connect } from 'react-redux';
import Home from './home';
import { fetchUserTeams } from '../../actions/team_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Home);

import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  userTeams: state.team.userTeams
});

export default connect(
  mapStateToProps
)(Home);

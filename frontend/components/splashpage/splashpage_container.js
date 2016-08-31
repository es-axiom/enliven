import { connect } from 'react-redux';
import Splashpage from './splashpage';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Splashpage);

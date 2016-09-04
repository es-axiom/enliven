import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBarContent from './navbar_content';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarContent);

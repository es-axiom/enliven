import { connect } from 'react-redux';
import ProfileView from './profile_view';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect (
  mapStateToProps
)(ProfileView);

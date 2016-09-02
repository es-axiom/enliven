import { connect } from 'react-redux';
import AppRouter from './router';

const mapStateToProps = state => ({
  currentUser: state.session.user
});

export default connect (
  mapStateToProps
)(AppRouter);

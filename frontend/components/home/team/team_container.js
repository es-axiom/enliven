import { connect } from 'react-redux';
import TeamDetails from './team_details';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


export default connect(
  mapStateToProps
)(TeamDetails);

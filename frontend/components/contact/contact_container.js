import { connect } from 'react-redux';
import ContactDetails from './contact_details.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.user
});

export default connect (
  mapStateToProps
)(ContactDetails);

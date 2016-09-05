import { connect } from 'react-redux';
import ChannelIndex from './channel_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentTeam: state.team.currentTeam
});


export default connect(
  mapStateToProps
)(ChannelIndex);

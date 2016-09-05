import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchTeamChannels } from '../../../actions/channel_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentTeam: state.team.currentTeam,
  currentTeamChannels: state.teamChannels.teamChannels
});

const mapDispatchToProps = dispatch => ({
  fetchTeamChannels: (team_id) => dispatch(fetchTeamChannels(team_id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);

import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';

const mapStateToProps = state => ({
  channels: state.channels
});

export default connect(
  mapStateToProps
)(ChannelsIndex);

import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';

const mapStateToProps = state => ({
  channels: state.channels
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps
)(ChannelsIndex);

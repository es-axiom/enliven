import React from 'react';
// import ChannelsContainer from './channels/channels_container';
//TODO: import ChannelsContainer
import TeamContainer from './team/team_container';

class TreeViewContainer extends React.Component {
  componentDidMount() {
// TODO: Populate Channels
  }

  render() {
    return (
      <div>
        <TeamContainer />
        // TODO: Add channels container
        // TODO Add DM chats container
      </div>
    )
  }
}

export default TreeViewContainer;

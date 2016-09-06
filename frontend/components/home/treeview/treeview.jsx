import React from 'react';
import TeamContainer from '../team/team_container';
import ChannelContainer from '../channel/channel_container';
import DMChatContainer from '../dm_chat/dm_chat_container';

class TreeView extends React.Component {

  render() {
    return (
      <div className='tree-view-container'>
        <TeamContainer />
        <ChannelContainer />
        <DMChatContainer />
      </div>
    )
  }
}

export default TreeView;

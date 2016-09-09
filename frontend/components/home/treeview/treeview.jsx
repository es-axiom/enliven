import React from 'react';
import ChannelContainer from './channel/channel_container';
import DMChatContainer from './dm_chat/dm_chat_container';

class TreeView extends React.Component {
  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    return (
      <ul className='tree-view-container'>
        <li className='team-details'>
          <ul className='team-details-list'>
            <li className='team-details-title'>
              <h2>Rebel Alliance</h2>
            </li>
            <li className='team-details-members'># of Members</li>
            <li className='team-details-channels'># of Channels</li>
          </ul>
        </li>
        <li className='channel-div'>
          <ChannelContainer />
        </li>
        <li className='dm-chat-div'>
          <DMChatContainer />
        </li>
      </ul>
    )
  }
}

export default TreeView;

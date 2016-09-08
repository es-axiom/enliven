import React from 'react';
import ChannelContainer from '../channel/channel_container';
import DMChatContainer from '../dm_chat/dm_chat_container';
import TeamSelect from './team_select';

class TreeView extends React.Component {
  constructor(props) {
    super(props);
    this.currentTeam = this.currentTeam.bind(this);
  }

  currentTeam(teamArr) {
    const tA = Object.keys(teamArr).map( key => {
      return teamArr[key];
    });
    return tA[0];
  }


  render() {
    let teamArr = this.props.userTeams ? this.props.userTeams : [];
    let currentTeam = this.currentTeam(teamArr);
    let no_of_members = currentTeam ? currentTeam.no_of_members : "";
    let no_of_channels = currentTeam ? currentTeam.no_of_channels : "";
    return (
      <ul className='tree-view-container'>
        <li className='team-details'>
          <TeamSelect teamArr={ teamArr } />
          <ul className='team-details-list'>
            <li className='team-details-members'>{ no_of_members } Members</li>
            <li className='team-details-channels'>{ no_of_channels } Channels</li>
          </ul>
        </li>
        <li className='channel-div'>
          <ChannelContainer currentTeam={ currentTeam }/>
        </li>
        <li className='dm-chat-div'>
          <DMChatContainer />
        </li>
      </ul>
    )
  }
}

export default TreeView;

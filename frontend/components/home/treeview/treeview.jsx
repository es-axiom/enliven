import React from 'react';
import ChannelContainer from '../channel/channel_container';
import DMChatContainer from '../dm_chat/dm_chat_container';
import TeamSelect from './team_select';

class TreeView extends React.Component {

  currentTeams() {
    const userTeams = [this.props.userTeams];
    const teamArr = [];
    for(let index in userTeams) {
      teamArr.push(userTeams[index]);
    }
    return teamArr;
  }

  currentTeam() {
    return this.currentTeams()[0];
  }

  render() {
    let currentTeam = { this.currentTeam() }
    let no_of_members = currentTeam ? currentTeam.no_of_members : "";
    let no_of_channels = currentTeam ? currentTeam.no_of_channels : "";
    return (
      <div className='tree-view-container'>
        <div className='team-details'>
          <TeamSelect teamArr={ this.currentTeams() } />
          <ul className='team-details-list'>
            <li>{ no_of_members }</li>
            <li>{ no_of_channels }</li>
          </ul>
        </div>
      </div>
    )
  }
}
        // <ChannelContainer team={ currentTeam }/>
        // <DMChatContainer />

export default TreeView;

import React from 'react';
import TeamContainer from '../team/team_container';
import ChannelContainer from '../channel/channel_container';
import DMChatContainer from '../dm_chat/dm_chat_container';

class TreeView extends React.Component {
  componentDidMount() {
    this.props.fetchUserTeams();
  }

  teamSelector() {
    const teamArr = [];
    for(var index in userTeams) {
      teamArr.push(userTeams[index]);
    }
    return (
      <select id="teamSelect" name="teamSelect">
        { this.teamIndex(teamArr) }
      </select>
    )
  }

  teamIndex() {
    return teamArr.map( team => {
      <option key={team.id} value={team.id}>{team.name}</option>
    })
  }

  selectedTeam() {
    let e = document.getElementById('teamSelect');
    return e.options[e.selectedIndex].value;
  }

  render() {
    return (
      <div className='tree-view-container'>
        // <TeamContainer userTeams={this.props.userTeams}/>
        <div className='team-details'>
          <h2 className='team-details-name'>
            { this.selectedTeam().name }
          </h2>
          <ul className='team-details-list'>
            <li>1002 Members</li>
            <li>12 Channels</li>
          </ul>
        </div>
        <ChannelContainer userTeams={this.props.userTeams}/>
        <DMChatContainer />
      </div>
    )
  }
}

export default TreeView;

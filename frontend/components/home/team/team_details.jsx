import React from 'react';

class TeamDetails extends React.Component {

  teamName() {
    let teamName = "";
    const userTeams = this.props.userTeams;
    if(userTeams) {
      const teamArr = [];
      for(var index in userTeams) {
        teamArr.push(userTeams[index]);
      }
      teamName = teamArr[0].name;
    }
    return teamName;
  }

  render() {
    return (
      <div className='team-details'>
        <h2 className='team-details-name'>
          { this.teamName() }
        </h2>
        <ul className='team-details-list'>
          <li>1002 Members</li>
          <li>12 Channels</li>
        </ul>
      </div>
    )
  }
}

export default TeamDetails;

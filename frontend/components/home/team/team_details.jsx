import React from 'react';

class TeamDetails extends React.Component {
  render() {
    return (
      <div className='team-details'>
        <h2 className='team-details-name'>#Team Name</h2>
        <ul className='team-details-list'>
          <li>Number of Members</li>
          <li># of Channels</li>
        </ul>
      </div>
    )
  }
}

export default TeamDetails;

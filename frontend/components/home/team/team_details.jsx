import React from 'react';

const TeamDetails = ({ team }) => {
  return (
    <div className='team-details'>
      <h2 className='team-details-name'>Team#Name</h2>
      <ul className='team-details-list'>
        <li>1042 Members</li>
        <li>11 Channels</li>
      </ul>
    </div>
  )
}

export default TeamDetails;

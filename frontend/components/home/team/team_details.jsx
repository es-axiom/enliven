import React from 'react';

const TeamDetails = ({ team }) => {
  return (
    <div className='team-details'>
      <h2 className='team-details-name'>{team.name}</h2>
      <ul className='team-details-list'>
        <li>This will be a details list</li>
        //TODO: display number of channels
        //TODO: display number of members
      </ul>
    </div>
  )
}

export default TeamDetails;

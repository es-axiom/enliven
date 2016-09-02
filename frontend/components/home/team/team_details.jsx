import React from 'react';

class TeamDetails extends React.Component {
  componentDidMount() {
    this.props.receiveCurrentTeam(1);
  }

  render() {
    return (
      <div className='team-details'>
        <h2 className='team-details-name'>#{ this.props.team.name }</h2>
        <ul className='team-details-list'>
          <li>{ this.props.team.users } Members</li>
          <li># of Channels</li>
        </ul>
      </div>
    )
  }
}

export default TeamDetails;

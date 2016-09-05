import React from 'react';

class TeamDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeam(1);
  }

  render() {
    const teamName = (this.props.currentTeam ? this.props.currentTeam.name : "")

    return (
      <div className='team-details'>
        <h2 className='team-details-name'>
          { teamName }
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

import React from 'react';

class ChannelIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTeamChannels(this.currentTeamID());
  }

  currentTeamID() {
    if(this.props.currentTeam) {
      return this.props.currentTeam.id
    }
    return 1;
  }

  teamChannelList(channelsArr) {
    
    return (
      channelsArr.map( (channel, idx) => {
        return (
          <li key={idx} className='channel-index-element'>
            <p>{channel.channel.name}</p>
            <span>{channel.no_of_msg}</span>
          </li>
        )
      })
    )
  }

  render() {
    let channels = [];
    if(this.props.teamChannels){
      channels = Object.keys(this.props.teamChannels).map( key => {
        return this.props.teamChannels[key];
      })
    }
    // TODO: Add TeamDetailModal to display 2 tabs, detail and team members
    return (
      <section className='channels-box'>
        <h3>Team Channels</h3>
        <ul className='channels-index'>
          { this.teamChannelList(channels) }
        </ul>
      </section>
    )
  }
}

export default ChannelIndex;

import React from 'react';

class ChannelIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTeamChannels(1);
  }

  teamChannelList() {
    if(this.props.currentTeamChannels) {
      let responseArr = [];
      for(var index in this.props.currentTeamChannels) {
        responseArr.push(this.props.currentTeamChannels[index]);
      }
      return (
        responseArr.map( channel => {
          return (
            <li key={channel.id}>{channel.name}</li>
          )
        })
      )
    }
  }

  render() {
    return (
      <section className='channels-box'>
        <h3>Team Channels</h3>
        <ul className='channels-index'>
          { this.teamChannelList() }
        </ul>
      </section>
    )
  }
}

export default ChannelIndex;

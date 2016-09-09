import React from 'react';
import { Link } from 'react-router';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChannel: null
    }
    this.setChannel = this.setChannel.bind(this);
  }

  setChannel(channel) {
    this.setState({ currentChannel: channel.id });
    this.props.receiveCurrentChannel(this.state.currentChannel);
    this.props.fetchChatMessages(channel.id);
  }

  channelList(channels) {
    return (
      channels.map( (channel, idx) => {
        return (
          <li key={idx} className='channel-index-element'>
            <button className='channel-index-button'
              onClick={ this.setChannel.bind(this, channel.channel) }>
              {channel.channel.name}
            </button>
          </li>
        )
      })
    )
  }

  render() {
    let channels = [];
    if(this.props.channels){
      channels = Object.keys(this.props.channels).map( key => {
        return this.props.channels[key];
      })
    }
    // TODO: Add TeamDetailModal to display 2 tabs, detail and team members
    return (
      <section className='channels-box'>
        <ul className='channels-header'>
          <li><h3>Channels</h3></li>
          <li><Link to='/channels/new'>+</Link></li>
        </ul>
        <ul className='channels-index'>
          { this.channelList(channels) }
        </ul>
      </section>
    )
  }
}

export default ChannelIndex;

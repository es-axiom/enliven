import React from 'react';
import { Link } from 'react-router';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  setChannel(channel_id) {
    this.props.receiveCurrentChannel(channel_id);
    this.props.fetchChatMessages(channel_id);
  }

  channelList(channels) {
    return (
      channels.map( (channel, idx) => {
        return (
          <button key={idx} className='channel-index-button'
            onClick={ this.setChannel.bind(this, (idx + 1)) }>
            {channel.channel.name}
          </button>
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
    return (
      <section className='channels-box'>
        <ul className='channels-header'>
          <li><h3>Channels</h3></li>
        </ul>
        <ul className='channels-index'>
          { this.channelList(channels) }
        </ul>
      </section>
    )
  }
}

export default ChannelIndex;

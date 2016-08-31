import React from 'react';
import ChannelsIndexItem from './channels_index_item';

const ChannelsIndex = ({ channels, children }) => {
  return (
    <section className='channel-index'>
      <ul>
        { channels.map( channel => {
          return (
            <ChannelsIndexItem key={channel.id} channel={channel} />
          )
        })}
      </ul>
      { children }
    </section>
  )
}

export default ChannelsIndex;

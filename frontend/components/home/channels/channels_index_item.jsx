import React from 'react';

const ChannelsIndexItem = ({ channel }) => (
  <li className='channels-index-item'>
    <span>{ channel.title }</span>
  </li>
)

export default ChannelsIndexItem;

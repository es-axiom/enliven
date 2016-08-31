import React from 'react';

class TreeViewContainer extends React.Component {
  componentDidMount() {
// TODO: Populate Channels
  }

  render() {
    return (
      <div>
        <section className='channels-container'>
          <ul className='channel-title'>
            #all_channels
          </ul>
        </section>
        <section className='dm-chats-container'>
          #all dm_chats
        </section>
      </div>
    )
  }
}

export default TreeViewContainer;

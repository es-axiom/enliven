import React from 'react';
// import ChannelsContainer from './channels/channels_container';

class TreeViewContainer extends React.Component {
  componentDidMount() {
// TODO: Populate Channels
  }

  render() {
    return (
      <div>
        <ChannelsContainer />
        <section className='dm-chats-container'>
          #all dm_chats
        </section>
      </div>
    )
  }
}

export default TreeViewContainer;

import React from 'react';
import TreeViewContainer from './treeview/treeview_container';
import ChatViewContainer from './chatview/chatview_container';

class Home extends React.Component {
  componentDidMount() {
      this.props.fetchChannels();
      this.props.fetchUserDMChats();
      if(this.props.currentChannel > 0) {
        this.props.fetchChatMessages(this.props.currentChannel);
      } else {
        this.props.fetchChatMessages(1);
      }
  }

  render() {
    return (
      <div className='home-container'>
        <section className="treeView">
          <TreeViewContainer />
        </section>
        <section className='chatView'>
          <ChatViewContainer />
        </section>
      </div>
    )
  }
}

export default Home;

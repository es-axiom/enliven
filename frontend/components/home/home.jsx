import React from 'react';
import TreeViewContainer from './treeview/treeview_container';
import ChatViewContainer from './chatview/chatview_container';

class Home extends React.Component {
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

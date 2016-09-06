import React from 'react';
import TreeViewContainer from './treeview/treeview_container';
import ChatViewContainer from './chatview/chatview_container';

const Home = () => {
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

export default Home;

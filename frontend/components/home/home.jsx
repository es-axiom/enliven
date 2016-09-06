import React from 'react';
import TreeViewContainer from './treeview/treeview_container';
import ChatViewContainer from './chatview/chatview_container';

const Home = () => {
  return (
    <section className="treeView">
      <TreeViewContainer />
      <ChatViewContainer />
    </section>
  )
}

export default Home;

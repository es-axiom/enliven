import React from 'react';

class ChatView extends React.Component {
  componentDidMount() {
    this.props.fetchChatMessages(1)
  }

  currentChannel() {

  }


  render() {
    const userN =
      this.props.currentUser.username ?
        this.props.currentUser.username : "";
    return(
      <div className ='chat-view-container'>
        { userN }
      </div>
    )
  }
}

export default ChatView;

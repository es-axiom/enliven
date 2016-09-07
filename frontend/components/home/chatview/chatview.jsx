import React from 'react';

class ChatView extends React.Component {
  componentDidMount() {
    this.props.fetchChatMessages(1)
    // let pusher = new Pusher('', {
    //   encrypted: true
    // });
    //
    // let channel = pusher.subscribe('channel_' + this.props.)
  }

  renderMessages() {
    const msgArr = [];
    for(var index in this.props.chatMessages) {
      msgArr.push(this.props.chatMessages[index])
    }
    return msgArr.map ( msg => {
      return (
        <li key={msg.id} className='message-container'>
          <ul className='message'>
            <li key={msg.user.id}>{msg.user.username}</li>
            <li key={msg.content[0]}>{msg.content}</li>
          </ul>
        </li>
      )
    })
  }

  render() {
    return(
      <ul className ='chat-view-container'>
        { this.renderMessages() }
      </ul>
    )
  }
}

export default ChatView;

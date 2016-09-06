import React from 'react';

class ChatView extends React.Component {
  componentDidMount() {
    this.props.fetchChatMessages(1)
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
            <li>{msg.user_id}</li>
            <li>{msg.content}</li>
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

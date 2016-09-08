import React from 'react';

class ChatView extends React.Component {
  constructor(props) {
    super(props);

    this.renderMessages = this.renderMessages.bind(this);
  }

  componentDidMount() {
    this.props.fetchChatMessages(1)
    // let pusher = new Pusher('', {
    //   encrypted: true
    // });
    //
    // let channel = pusher.subscribe('channel_' + this.props.)
  }

  renderMessages() {
    let msgArr = [];
    if(this.props.chatMessages) {
      msgArr = Object.keys(this.props.chatMessages).map( key => {
        return this.props.chatMessages[key];
      })
      return msgArr.map ( (msg, idx) => {
        if(!!msg.user) {
          return (
            <li key={msg.id} className='message-container'>
              <ul className='message'>
                <li key={idx+1}>{msg.user.username}</li>
                <li key={idx}>{msg.content}</li>
              </ul>
            </li>
          )
        }
      })
    }
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

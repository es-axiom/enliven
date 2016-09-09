import React from 'react';
import MessageFormContainer from './message_form_container';

class ChatView extends React.Component {
  componentDidMount() {
    this.props.receiveCurrentChannel();
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
      <div className='chat-view-container'>
        <ul className ='chat-view-index'>
          { this.renderMessages() }
        </ul>
        <div className='message-form-container'>
          <MessageFormContainer />
        </div>
      </div>
    )
  }
}

export default ChatView;

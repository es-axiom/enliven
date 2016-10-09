import React from 'react';
import DmModalContainer from './dm_modal_container';

class DMChatIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserDMChats(this.props.currentUser);
  }

  dmChatButton(chat_id) {
    return (
      <DmModalContainer key={chat_id} chatId={chat_id}/>
    )
  }

  allUserChats() {
    let listArr = [];
    for(var index in this.props.dmChats) {
      listArr.push(this.props.dmChats[index]);
    }
    return (
      listArr.map( chat => {
        return (
          <li key={chat.dm_id}>
            { this.dmChatButton(chat.dm_id)}
          </li>
        )
      })
    )
  }

  render () {
    return (
      <section className='dm-chat-container'>
        <div className='dm-header'>
          <h3>Your Direct Messages</h3>
          <h3>+</h3>
        </div>
        <ul className='dm-chat-index'>
          { this.allUserChats() }
        </ul>
      </section>
    )
  }
}

export default DMChatIndex;

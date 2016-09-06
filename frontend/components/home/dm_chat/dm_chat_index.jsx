import React from 'react';
import DmModalContainer from './dm_modal_container';

class DMChatIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserDMChats(this.props.currentUser);
  }

  dmChatButton(chat_id) {
    return (
      <DmModalContainer />
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
          <li key={chat.id}>{ this.dmChatButton(chat.id)}</li>
        )
      })
    )
  }

  render () {
    return (
      <section className='dm-chat-container'>
        <h3>Your Direct Messages</h3>
        <ul className='dm-chat-index'>
          { this.allUserChats() }
        </ul>
      </section>
    )
  }
}

export default DMChatIndex;

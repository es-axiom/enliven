import React from 'react';

class DMChatIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserDMChats(this.props.currentUser);
  }

  allUserChats() {
    let listArr = [];
    for(var index in this.props.userChats) {
      listArr.push(this.props.userChats[index]);
    }
    return (
      listArr.map( chat => {
        return (
          <li key={chat.id}>{chat.title}</li>
        )
      })
    )
  }

  render () {
    return (
      <ul className='dm-chat-index'>
        { this.allUserChats() }
      </ul>
    )
  }
}

export default DMChatIndex;

import React from 'react';

class ChatView extends React.Component {
  render() {
    return(
      <div>
        { this.props.currentUser.username }
      </div>
    )
  }
}

export default ChatView;

import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      chat_id: this.props.currentChannel
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  clear(field) {
    return e => { this.setState({ field: "" }); };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.chat_id = this.props.currentChannel;
    const message = this.state;
    this.props.postMessage({ message });
    this.clear("content");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='message-form-box'>
        <input type='text'
          onChange={this.update("content")}
          className='message-input'
          placeholder='message your channel' />
        <input type='submit'
          className='submit-message'
          value='Send' />
      </form>
    )
  }
}

export default MessageForm;

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
    return e => { this.setState({[field]: e.currentTarget.value,
                                  chat_id: this.props.currentChannel }); };
  }

  clear(field) {
    return e => { this.setState({ field: "" }); };
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.state;
    this.clear("content");
    this.props.postMessage({ message });
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

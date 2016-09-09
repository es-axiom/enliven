import React from 'react';
import { Link } from 'react-router';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: "",
      team_id: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  handleSubmit(e){
    e.preventDefault();
    const channel = this.state;
    this.props.createChannel({ channel });
  }

  render() {
    return (
      <div className='channel-form-container'>
        <form onSubmit={this.handleSubmit} className='channel-form-box'>
          <div className='channel-form'>
            <input type='text'
              value={this.state.name}
              onChange={this.update("name")}
              className='channel-input'
              placeholder='channel name' />
            <input type='text'
              value={this.state.status}
              onChange={this.update("status")}
              className='channel-input'
              placeholder='status' />
            <input className='channel-form-submit'
              type='submit'
              value='Create' />
          </div>
        </form>
      </div>
    )
  }
}

export default ChannelForm;

import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) {
      hashHistory.push('/home');
    }
  }

  update(field) {
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if(this.props.formType === 'login') {
      return <Link className='link' to="/signup">sign up instead</Link>;
    } else {
      return <Link className='link' to="/login">log in instead</Link>;
    }
  }

  displayEmailField() {
    this.props.formType === 'signup';
  }

  renderErrors() {
    return (
      <ul className='error-container'>
        { this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='login_form_container'>
        <form onSubmit={this.handleSubmit} className='login_form_box'>
          Welcome To Enliven!
          Please { this.props.formType } or { this.navLink() }
          { this.renderErrors() }
          <div className='login_form group'>
              <input type='text'
                     value={this.state.username}
                     onChange={this.update('username')}
                     className='login_input'
                     placeholder='username' />
              <input type='text'
                     value={this.state.email}
                     onChange={this.update('email')}
                     className='login_input'
                     placeholder='email'
                     hidden={this.displayEmailField()} />
              <input type='text'
                     value={this.state.password}
                     onChange={this.update('password')}
                     className='login_input'
                     placeholder='password' />
              <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;

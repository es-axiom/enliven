import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../../session_form/session_form_container';
import LoginStyle from '../modal_styles/login_style.js'
import { replace } from 'react-router';

class SessionModal extends React.Component {
  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  componentWillMount() {
    this.setState({ modalOpen: false });
  }

  _handleClick(isLogin) {
    if(isLogin === 'Logout') {
      // this.props.logout();
    } else {
      this.setState({ loginOrNot: true,
                      modalOpen: true });
    }
  }

  onModalClose() {
    this.setState({ modalOpen: false });
  }

  loginOrLogout(currentUser) {
    if(currentUser) {
      return 'Logout';
    } else {
      return 'Login';
    }
  }

  loginOrSignup() {
    if(this.state.loginOrNot) {
      return 'Login'
    } else {
      return 'Sign Up'
    }
  }

  lOrS() {
    if(this.state.loginOrNot) {
      return 'signup';
    } else {
      return 'login'
    }
  }

  otherActionButton() {
    if(this.state.loginOrNot) {
      return (<button onClick={() => this.setState({ loginOrNot: false })}>
              Sign Up Instead
             </button>)
    } else {
      return (<button onClick={() => this.setState({ loginOrNot: true })}>
              Login Instead
             </button>)
    }
  }

  render() {
    return (
      <div>
        <button onClick={ this._handleClick.bind(this, this.loginOrLogout()) }>
          { this.loginOrLogout() }
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={ this.onModalClose }
          style={ LoginStyle }>
          <h2>Please { this.loginOrSignup() }, or { this.otherActionButton() }</h2>
          <button onClick={ this.onModalClose }>close</button>
          <SessionFormContainer formType={ this.lOrS() } closeModal={ this.onModalClose.bind(this) } />
        </Modal>
      </div>
    )
  }
}

export default SessionModal;

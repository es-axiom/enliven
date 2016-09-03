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

  _handleClick(formType) {
    if(formType === 'signup') {
      this.setState({ formType: 'signup',
                      modalOpen: true });
    }
    if(formType === 'login') {
      this.setState({ formType: 'login',
                      modalOpen: true });
    }
    if(formType === 'logout'){
      console.log('hit it');
    }
  }

  onModalClose() {
    this.setState({ modalOpen: false });
  }

  loginOrLogout() {
    if(this.props.currentUser) {
      return 'logout';
    } else {
      return 'login';
    }
  }

  signUp() {
    if(this.props.currentUser) {
      return '';
    } else {
      return 'Sign Up'
    }
  }

  render() {
    return (
      <div>
        <button onClick={ this._handleClick.bind(this, this.loginOrLogout()) }>
          { this.loginOrLogout().toUpperCase() }
        </button>
        <button onClick={ this._handleClick.bind(this, 'signup') }>
          { this.signUp().toUpperCase() }
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={ this.onModalClose }
          style={ LoginStyle }>
          <button onClick={ this.onModalClose }>close</button>
          <SessionFormContainer formType={ this.state.formType } closeModal={ this.onModalClose.bind(this) } />
        </Modal>
      </div>
    )
  }
}

export default SessionModal;

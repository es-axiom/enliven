import React from 'react';
import Modal from 'react-modal';
import AboutStyle from '../modal_styles/about_style';

class AboutModal extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  componentWillMount() {
    this.setState({ modalOpen: false });
  }

  _handleClick() {
    this.setState({ modalOpen: true });
  }

  onModalClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={ this._handleClick }>
          About Us
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ AboutStyle }>
          <section className='details-container'>
            <h2 className='details-heading'>Enliven</h2>
            <p className='details-description'>
              Details about this wonderful app...
            </p>
          </section>
        </Modal>
      </div>
    )
  }
}

export default AboutModal;

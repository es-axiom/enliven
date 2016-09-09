import Modal from 'react-modal';
import React from 'react';

var appElement = document.getElementById('body');
Modal.setAppElement(appElement);

const customStyle = {
  content: {
    //TODO: Add DmModal content styling
  },
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  }
}

class DmModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    Modal.setAppElement(document.body);
  }

  componentDidMount() {
    this.props.dmMessages(this.props.chatId);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    // TODO: Add DmChat to Modal

    return (
      <div>
        <button onClick={this.openModal}>...dm_chat...</button>
        <Modal className='dm-modal'
               isOpen={ this.state.modalIsOpen }
               onRequestClose={this.closeModal}
               style={customStyle}>
          <h3>Dm Chat Awaits</h3>
          <p>Or does it? Not really sure right now</p>
        </Modal>
      </div>
    )
  }
}

export default DmModal;

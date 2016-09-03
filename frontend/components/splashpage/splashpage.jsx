import React from 'react';

class Splashpage extends React.Component {
  greetingMessage() {
    if(this.props.currentUser) {
      return 'What is your team up to?'
    } else {
      return 'Stick with your team anywhere you go.'
    }
  }

  render() {
    return (
      <div className="Overlay">
        <div className="Overlay-quote">
          <span className="Overlay-quote-text">{ this.greetingMessage() }</span>
        </div>
        <div className="Overlay-Team-Finder">
          <h3>Find Your Team</h3>
        </div>
      </div>
    )
  }
}

export default Splashpage;

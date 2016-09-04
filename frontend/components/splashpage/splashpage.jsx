import React from 'react';
import { hashHistory } from 'react-router';

class Splashpage extends React.Component {

  render() {
    return (
      <div className="Overlay">
        <div className="Overlay-quote">
          <span className="Overlay-quote-text">Stick with your team anywhere you go.</span>
        </div>
        <div className="Overlay-Team-Finder">
        </div>
      </div>
    )
  }
}

export default Splashpage;

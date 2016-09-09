import React from 'react';
import { Link } from 'react-router';

class Splashpage extends React.Component {

  render() {
    return (
      <div className="Overlay">
        <div className="Overlay-quote">
          <span className="Overlay-quote-text">Stick with your team anywhere you go.</span>
        </div>
        <ul className="Overlay-list">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/login'>Sign In As Guest</Link></li>
        </ul>
        <footer className='footer-container'>
          <div><Link to='/contact'>Contact Us</Link></div>
        </footer>
      </div>
    )
  }
}

export default Splashpage;

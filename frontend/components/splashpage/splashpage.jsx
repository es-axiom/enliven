import React from 'react';
import { Link } from 'react-router';

class Splashpage extends React.Component {
  secondButton() {
    if(this.props.currentUser) {
      return (
        <div className='welcome-message'>
          <span>Welcome {this.props.currentUser.username}</span>
        </div>
      )
    }
  }

  render() {

    return (
      <div className="Overlay">
        <ul className="Overlay-list">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <div className="Overlay-quote">
          <span className="Overlay-quote-title">Enliven</span>
          <span className="Overlay-quote-text">Stick with your team anywhere you go.</span>
        </div>
      </div>
    )
  }
}

export default Splashpage;

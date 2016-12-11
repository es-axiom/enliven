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
          <li><Link to='/home'><span>Home</span></Link></li>
          <li><Link to='/login'><span>login</span></Link></li>
          <li><Link to='/about'><span>About</span></Link></li>
          <li><Link to='/contact'><span>Contact</span></Link></li>
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

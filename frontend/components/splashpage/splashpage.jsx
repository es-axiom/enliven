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
        <div className="Overlay-quote">
          <span className="Overlay-quote-text">Stick with your team anywhere you go.</span>
        </div>
        <ul className="Overlay-list">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/login'>{this.secondButton()}</Link></li>
        </ul>
      </div>
    )
  }
}

export default Splashpage;

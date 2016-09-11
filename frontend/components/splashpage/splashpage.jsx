import React from 'react';
import { Link } from 'react-router';

class Splashpage extends React.Component {
  secondButton() {
    if(this.props.currentUser) {
      return (
        <div className='welcome-message'>
          <img src='https://res.cloudinary.com/es-axiom/image/upload/v1473623628/guest-512_1_htfbbi.png' />
          <span>Welcome {this.props.currentUser.username}</span>
        </div>
      )
    } else {
      return (
        <img src='https://res.cloudinary.com/es-axiom/image/upload/v1473623628/guest-512_1_htfbbi.png' />
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
          <li><Link to='/home'><img src='http://www.clipartkid.com/images/61/clipartbest-com-NgoPDy-clipart.png'/></Link></li>
          <li><Link to='/login'>{this.secondButton()}</Link></li>
        </ul>
      </div>
    )
  }
}

export default Splashpage;

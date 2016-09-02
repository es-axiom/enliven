import React from 'react';
import { Link } from 'react-router';

class NavbarContent extends React.Component {

  login_or_logout(bool) {
    if(bool) {
      return (
        <li><button onClick={ this.props.logout } value='Logout' /></li>
      )
    } else {
      return (
        <li><Link to='/login'>Login</Link></li>
      )
    }
  }

  render() {
    console.log(this.props.loggedIn);
    return (
      <header className='navbar-container'>
        <Link to='/' className='header-link'><h1 className="head-title">ENLIVEN</h1></Link>
        <ul className='navbar-list'>
          <li>About Us</li>
          <li>Create A Team</li>
          <li>Find Your Team</li>
          { this.login_or_logout(this.props.loggedIn) }
        </ul>
      </header>
    )
  }
}

export default NavbarContent;

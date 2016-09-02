import React from 'react';
import { Link } from 'react-router';
import ModalContainer from './modal_container';

class NavbarContent extends React.Component {
  render() {
    return (
      <header className='navbar-container'>
        <Link to='/' className='header-link'><h1 className="head-title">ENLIVEN</h1></Link>
        <ul className='navbar-list'>
          <li><Link to='/about'>About Us</Link></li>
          <li>Create A Team</li>
          <li>Find Your Team</li>
          <li><ModalContainer /></li>
        </ul>
      </header>
    )
  }
}

export default NavbarContent;

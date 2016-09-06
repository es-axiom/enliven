import React from 'react';
import { Link } from 'react-router';

    //TODO: Modal for About
const NavBarStatic = () => (
  <ul className='header-static'>
    <li className='header-static-logo'>
      <Link to='/'>LOGO</Link>
    </li>
    <li className='header-static-title'>
      <Link to='/'>Enliven</Link>
    </li>
  </ul>
)

export default NavBarStatic;

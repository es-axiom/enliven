import React from 'react';
import { Link } from 'react-router';

    //TODO: Modal for About
const NavBarStatic = () => (
  <ul className='header-static'>
    <li className='header-static-title'>
      <Link to='/home' className='header-title'><h1 className='header-static-link'>Enliven</h1></Link>
    </li>
  </ul>
)

export default NavBarStatic;

import React from 'react';
import { Link } from 'react-router';

    //TODO: Modal for About
const NavBarStatic = () => (
  <ul className='header-static'>
    <li className='header-static-logo'>
      <Link to='/'>
        <img className='logo-img'
          src='https://res.cloudinary.com/es-axiom/image/upload/c_scale,w_106/v1473380640/letter-e-icon_trpq1e.ico' />
      </Link>
    </li>
    <li className='header-static-title'>
      <Link to='/'>Enliven</Link>
    </li>
  </ul>
)

export default NavBarStatic;

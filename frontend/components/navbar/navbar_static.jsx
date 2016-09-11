import React from 'react';
import { Link } from 'react-router';

    //TODO: Modal for About
const NavBarStatic = () => (
  <ul className='header-static'>
    <li className='header-static-logo'>
      <Link to='/'>
        <img className='logo-img'
          src='https://res.cloudinary.com/es-axiom/image/upload/c_scale,w_72/v1473569048/06d53573b62aedaa4d410aa943c1288b_vvgwij.jpg' />
      </Link>
    </li>
    <li className='header-static-title'>
      <Link to='/' className='header-title'><h1 className='header-static-link'>Enliven</h1></Link>
    </li>
  </ul>
)

export default NavBarStatic;

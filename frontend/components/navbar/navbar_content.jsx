import React from 'react';
import { Link, hashHistory } from 'react-router';
import NavBarStatic from './navbar_static';

const sessionLinks = () => (
  <div className='navbar'>
    <ul className='navbar-link'>
      <li><NavBarStatic /></li>
      <ul className='navbar-right-links'>
        <li className='navbar-right-link'>
          <Link to="/login" activeClassName="current">
            <span className='act-link'>
              Login
            </span>
          </Link>
        </li>
        <li>
          <Link to="/signup" activeClassName="current">
            <span className='act-link'>
              Sign Up
            </span>
          </Link>
        </li>
      </ul>
    </ul>
  </div>
);

const personalGreeting = (currentUser, logout) => (
  <ul className='navbar-logged-in'>
		<h2 className="header-name">Hi, {currentUser.username}!</h2>
		<button className="header-button"
      onClick={() => {
        logout();
        hashHistory.push('/');
      }}>
      Log Out
    </button>
  </ul>
);


function NavBarContent({currentUser, logout}){
  if (currentUser){
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

export default NavBarContent;

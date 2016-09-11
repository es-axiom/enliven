import React from 'react';
import { Link, hashHistory } from 'react-router';
import NavBarStatic from './navbar_static';

const sessionLinks = () => (
  <div className='navbar'>
    <ul className='navbar-link'>
      <li><NavBarStatic /></li>
      <ul className='navbar-right-links'>
        <li>
          <Link to="/login" activeClassName="current">Login</Link>
        </li>
        <li>
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </li>
      </ul>
    </ul>
  </div>
);

const personalGreeting = (currentUser, logout) => (
  <ul className='navbar-logged-in'>
    <li className='logged-in-nav-li'><NavBarStatic className='navbar-logged-in-static'/></li>
  	<li className='logged-in-nav-li-w-list'><hgroup className="header-group">
  		<h2 className="header-name">Hi, {currentUser.username}!</h2>
  		<button className="header-button"
        onClick={() => {
          logout();
          hashHistory.push('/');
        }}>
        Log Out
      </button>
  	</hgroup></li>
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

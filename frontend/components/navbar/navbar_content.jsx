import React from 'react';
import { Link, hashHistory } from 'react-router';
import NavBarStatic from './navbar_static';

const sessionLinks = () => (
  <div className='navbar'>
    <ul className='navbar-link'>
      <li><NavBarStatic /></li>
      <ul className='navbar-right-links'>
        <li>About Us</li>
        <li>Find Your Team</li>
        <li>Create A Team</li>
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
  <div className='navbar-logged-in'>
    <NavBarStatic className='navbar-logged-in-static'/>
  	<hgroup className="header-group">
  		<h2 className="header-name">Hi, {currentUser.username}!</h2>
  		<button className="header-button"
        onClick={() => {
          logout();
          hashHistory.push('/');
        }}>
        Log Out
      </button>
  	</hgroup>
  </div>
);


function NavBarContent({currentUser, logout}){
  if (currentUser){
    return personalGreeting(currentUser, logout);
  } else {
    return sessionLinks();
  }
}

export default NavBarContent;

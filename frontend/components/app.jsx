import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header className='navbar-container group'>
      <Link to='/' className='header-link'><h1 className="head-title">ENLIVEN</h1></Link>
      <ul className='navbar-list'>
        <li>About Us</li>
        <li>Create A Team</li>
        <li>Find Your Team</li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </header>
    { children }
  </div>
)

export default App;

import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className='navbar-container'>
          <Link to='/' className='header-link'><h1 className="head-title">ENLIVEN</h1></Link>
          <ul className='navbar-list'>
            <li>About Us</li>
            <li>Create A Team</li>
            <li>Find Your Team</li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </header>
        { children }
        <footer className='footer-container'>
          <div>Contact Us</div>
        </footer>
      </div>
    )
  }
}

export default App;

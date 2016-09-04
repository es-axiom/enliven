import React from 'react';
import { Link } from 'react-router';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    { children }
    <footer className='footer-container'>
      <div><Link to='/contact'>Contact Us</Link></div>
    </footer>
  </div>
)

export default App;

import React from 'react';
import { Link } from 'react-router';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div>
    <NavbarContainer />
    { children }
    <footer className='footer-container'>
      <div><Link to='/contact'>Contact Us</Link></div>
    </footer>
  </div>
)

export default App;

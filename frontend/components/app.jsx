import React from 'react';
import { Link } from 'react-router';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div className='app'>
    <div className='header'>
      <NavbarContainer />
    </div>
    <div className='main-screen'>
      { children }
    </div>
  </div>
)

export default App;

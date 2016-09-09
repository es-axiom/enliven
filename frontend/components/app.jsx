import React from 'react';
import { Link } from 'react-router';
import NavbarContainer from './navbar/navbar_container';

const App = ({ children }) => (
  <div className='app'>
    <header>
      <NavbarContainer />
    </header>
    { children }
  </div>
)

export default App;

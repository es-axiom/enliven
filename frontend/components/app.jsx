import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <Link to='/' className='header-link'><h1 className="head-title">ENLIVEN</h1></Link>
      { children }
    </header>
  </div>
)

export default App;

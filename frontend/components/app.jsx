import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
      <Link to='/' className='header-link'><h1>Enliven</h1></Link>
      <GreetingContainer />
    </header>
  </div>
)

export default App;

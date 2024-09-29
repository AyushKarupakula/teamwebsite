import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h1>Atlanta Food Finder Team</h1>
      <nav>
        <ul>
          <li><Link to="/">Team</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/process">Process</Link></li>
          <li><Link to="/demo">Demo</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
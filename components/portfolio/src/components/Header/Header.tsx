import React from 'react';

import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className='header-wrapper'>
        <div>
          Logo
        </div>
        <nav className='header-navigation'>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
            <li>Option 5</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

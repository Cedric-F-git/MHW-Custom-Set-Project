import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className='navbar'>
          <ul className='ul-nav'>
            <li className='li-nav'>Home</li>
            <li className='li-nav'>Custom Set</li>
            <li className='li-nav'>Compendium</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

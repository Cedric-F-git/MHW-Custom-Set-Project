import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className='navbar'>
          <ul className='ul-nav'>
            <li className='li-nav'>
              <Link to='/'>Home</Link>
            </li>
            <li className='li-nav'>
              <Link to='/custom-set'>Custom Set</Link>
            </li>
            <li className='li-nav'>
              <Link to='/compendium'>Compendium</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

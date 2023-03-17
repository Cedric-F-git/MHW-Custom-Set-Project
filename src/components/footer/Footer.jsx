import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p className='footer-data'>
        MHW is a registered trademark of Capcom. This site is made for the
        purpose of my training as a web developer and is created by myself.
        Data's from mhw-db.com.
      </p>
      <p className='footer-team'>Created by Fessaguet Cedric</p>
      <a href='mailto: fessaguet.c@gmail.com' className='contact'>
        E-mail
      </a>
    </footer>
  );
};

export default Footer;

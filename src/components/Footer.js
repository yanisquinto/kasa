//Footer.js
import React from 'react';
import './styles/components/footer.scss'
import logoKasa from './images/LOGO.png'

const Footer = () => {
  return (
    <footer>
        <img src={logoKasa} alt=''></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
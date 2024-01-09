import React from 'react';
import Logo from './images/LOGO.png';
import './styles/components/header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src={Logo} alt='logo kasa' />
      <nav>
        <NavLink to="/" activeClassName="active">Accueil</NavLink>
        <NavLink to="/a-propos" activeClassName="active">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;

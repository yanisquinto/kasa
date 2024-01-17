import React from 'react';
import Logo from './Images-components/LOGO.png';
import './styles-components/header.scss';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header>
      <img src={Logo} alt='logo kasa' />
      <nav>
        <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</NavLink>
        <NavLink to="/a-propos" className={location.pathname === '/a-propos' ? 'active' : ''}>A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header;


// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Mon Site Web</h1>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/a-propos">À Propos</a></li>
          {/* Ajoutez d'autres liens de navigation au besoin */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;


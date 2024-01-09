import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function Error404() {
  return (
    <div>
      <Header />
      <div>
        <h1>Erreur 404 - Page non trouvée</h1>
        <p>Désolé, la page que vous recherchez n'existe pas.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Error404;

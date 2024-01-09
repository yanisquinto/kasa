import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function Error404() {
  return (
    <div>
      <Header />
      <div className='container-404'>
        <h1 className='title-404'>404</h1>
        <p className='noexist-404'>Oups! La page que vous demandez n'existe pas.</p>
        <a href='/' className='gotoindex-404'>Retourner sur la page d'accueil</a>
      </div>
      <Footer />
    </div>
  );
}

export default Error404;

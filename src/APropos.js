// src/pages/APropos.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import bannerIMG from './components/images/bannerapropos.png'

const APropos = () => (
  <div>
    <Header />
    <Banner imageUrl={bannerIMG}></Banner>
    {/* Ajoutez le contenu de la page "À Propos" ici */}
  </div>
);

export default APropos;

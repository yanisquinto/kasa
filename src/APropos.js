// src/pages/APropos.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import bannerIMG from './components/images/bannerapropos.png'
import Footer from './components/Footer';

const APropos = () => (
  <div className='apropos-container'>
    <Header />
    <Banner imageUrl={bannerIMG}></Banner>
    <section></section>
    <Footer />
  </div>

);

export default APropos;

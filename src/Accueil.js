import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Card from './components/Card';
import imgBanner from './components/images/banneraccueil.png';
import jsonData from './components/Data.json'; 
import Footer from './components/Footer';

const Accueil = () => {
  const [cardsData] = React.useState(jsonData);

  return (
    <div className="accueil-container">
      <Header />
      <Banner imageUrl={imgBanner} texte="Texte sur la bannière de la page d'accueil" />
      <section className='gallerycard'>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            cover={card.cover}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Accueil;

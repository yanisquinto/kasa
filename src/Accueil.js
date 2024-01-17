import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Card from './components/Card';
import imgBanner from './generals-styles/generals-images/banneraccueil.png';
import jsonData from './data/Data.json';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const Accueil = () => {
  const [cardsData, setCardsData] = useState(jsonData.slice(0, 6));
  const [showMore, setShowMore] = useState(true);
  const scrollRef = useRef(null);

  const handleShowMore = () => {
    const remainingCards = jsonData.slice(cardsData.length, cardsData.length + 14);
    setCardsData((prevData) => [...prevData, ...remainingCards.slice(0, 3)]);

    if (remainingCards.length <= 3) {
      setShowMore(false);
    }

    setTimeout(() => {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }, 100);
  };

  const handleShowLess = () => {
    setCardsData(jsonData.slice(0, 6));
    setShowMore(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="accueil-container">
      <Header />
      <Banner imageUrl={imgBanner} texte="" />
      <section className='gallerycard'>
        {cardsData.map((card) => (
          <div key={card.id}>
            <Link to={`/logementPage/${card.id}`}>
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                cover={card.cover}
              />
            </Link>
          </div>
        ))}
        {showMore ? (
          <button className="show-more-button" onClick={handleShowMore}>Afficher plus</button>
        ) : (
          <button className="show-more-button show-less" onClick={handleShowLess}>Afficher moins</button>
        )}
        <div ref={scrollRef}></div>
      </section>
      <Footer />
    </div>
  );
};

export default Accueil;


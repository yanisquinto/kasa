// LogementPage.js
import React from 'react';
import Header from './components/Header';
import BodyLogement from './components/BodyLogement';
import Footer from './components/Footer';
import jsonData from './components/Data.json';
import { useParams } from 'react-router-dom';


const LogementPage = () => {
  const { id } = useParams();
  const logement = jsonData.find((item) => item.id === id);

  if (!logement) {
    // Gérer le cas où le logement n'est pas trouvé
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className='logement-container'>
      <Header />
      <BodyLogement logement={logement} />
      <Footer />
    </div>
  );
};

export default LogementPage;

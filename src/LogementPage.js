import React from 'react';
import Header from './components/Header';
import BodyLogement from './components/BodyLogement';
import Footer from './components/Footer';
import jsonData from './components/Data.json';
import { useParams } from 'react-router-dom';
import './components/styles/logement.scss'


const LogementPage = () => {
  const { id } = useParams();
  const logement = jsonData.find((item) => item.id === id);

  if (!logement) {
    
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

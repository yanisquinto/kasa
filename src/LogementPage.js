import React from 'react';
import Header from './components/Header';
import BodyLogement from './components/BodyLogement';
import Footer from './components/Footer';
import jsonData from './data/Data.json';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



const LogementPage = () => {
  const { id } = useParams();
  const logement = jsonData.find((item) => item.id === id);

  if (!logement) {
    
    return <Navigate to="/Error404" />;
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

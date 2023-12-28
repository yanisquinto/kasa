import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './main.scss';

const Accueil = () => (
  <div>
    <h1>Accueil</h1>
    <p>Bienvenue sur la page d'accueil !</p>
  </div>
);

const APropos = () => (
  <div>
    <h1>À Propos</h1>
    <p>En savoir plus sur notre application.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;



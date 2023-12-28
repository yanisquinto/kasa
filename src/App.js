import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './main.scss';
import Accueil from './Accueil';
import APropos from './APropos';

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



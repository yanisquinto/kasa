import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/styles/main.scss';
import './components/styles/App.css';
import Accueil from './Accueil';
import APropos from './APropos';
import Error404 from './Error404';
import LogementPage from './LogementPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/logementPage/:id" element={<LogementPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;




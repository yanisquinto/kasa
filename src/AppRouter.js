// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<APropos />} />
      {/* Ajoutez d'autres routes pour vos pages ici */}
    </Routes>
  </Router>
);

export default AppRouter;

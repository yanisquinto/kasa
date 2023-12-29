// Card.js
import React from 'react';
import './styles/components/card.scss';

const Card = ({ id, title, cover }) => (
  <div className="card">
    <img src={cover} />
    <div className="card-content">
      <h1>{title}</h1>
    </div>
  </div>
);

export default Card;

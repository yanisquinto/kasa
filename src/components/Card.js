import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles-components/card.scss';

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const logementUrl = `/logementPage/${id}`;
    navigate(logementUrl);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={cover} alt={title} />
      <div className="card-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Card;

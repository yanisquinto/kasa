// Rating.js
import React from 'react';
import './styles/components/rating.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);

  return (
    <div className="rating">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className='activestars' />
      ))}

      {[...Array(maxStars - fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className='greystars' />
      ))}
    </div>
  );
};

export default Rating;

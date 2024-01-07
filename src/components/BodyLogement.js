// BodyLogement.js

import React, { useState } from 'react';
import './styles/components/BodyLogement.scss';
import Slideshow from './Slideshow';
import Rating from './Rating';
import Tag from './Tag';
import DescriptionCollapse from './DescriptionCollapse';
import EquipmentsCollapse from './EquipmentsCollapse';

const BodyLogement = ({ logement }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!logement) {
    return null;
  }

  const {
    pictures,
    title,
    location,
    host: { name: hostName, picture: hostPicture },
    tags,
    rating,
    description,
    equipments,
  } = logement;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
  };


  return (
    <div className='container'>
      <Slideshow pictures={pictures} currentSlide={currentSlide} prevSlide={prevSlide} nextSlide={nextSlide} />
     
      <h2 className="title">{title}</h2>
      <p className="location">{location}</p>

      <div className="host">
        <img className="picture" src={hostPicture} alt={`Hôte ${hostName}`} />
        <p className="name">{hostName}</p>
      </div>

      <ul className="tags">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </ul>

      <Rating rating={rating} />

      <div>
      <DescriptionCollapse description={description} />
      <EquipmentsCollapse equipments={equipments} />
      </div>
    </div>
  );
};

export default BodyLogement;

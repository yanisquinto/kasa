import React, { useState } from 'react';
import './styles-components/BodyLogement.scss';
import Slideshow from './Slideshow';
import Rating from './Rating';
import Tag from './Tag';
import Collapse from './Collapse';

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

      <ul className="tags">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </ul>

      <div className="host">
        <p className="name">{hostName}</p>
        <img className="picture" src={hostPicture} alt={`Hôte ${hostName}`} />
      </div>
      
      <Rating rating={rating} />

      <div className='collapse-logement-container'>
      <Collapse title="Description" content={description} className="collapse-description-container"/>
      <Collapse title="Équipements" content={equipments} className="collapse-equipments-container"/>
      </div>
    </div>
  );
};

export default BodyLogement;

import React from 'react';
import './styles-components/slideshow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slideshow = ({ pictures, currentSlide, prevSlide, nextSlide }) => {
  return (
    <section className='container'>
      <div className="diaporama">
        <button className="prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img src={pictures[currentSlide]} alt={`Logement ${currentSlide + 1}`} />
        <button className="next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default Slideshow;


import React from 'react';
import './styles-components/slideshow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slideshow = ({ pictures, currentSlide, prevSlide, nextSlide }) => {
  const showArrows = pictures.length > 1;

  return (
    <section className='container'>
      <div className="diaporama">
        {showArrows && (
          <button className="prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        <img src={pictures[currentSlide]} alt={`Logement ${currentSlide + 1}`} />
        {showArrows && (
          <button className="next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
        <div className="slide-counter">{`${currentSlide + 1}/${pictures.length}`}</div>
      </div>
    </section>
  );
};

export default Slideshow;




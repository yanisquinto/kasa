import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './styles/components/collapse-description.scss';

const DescriptionCollapse = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const collapseRef = useRef(null);

  const adjustFooterPosition = () => {
    const collapseHeight = collapseRef.current.offsetHeight;
    const footer = document.querySelector('footer');
    footer.style.transform = isOpen ? `translateY(${collapseHeight}px)` : 'translateY(0)';
  };

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    adjustFooterPosition();
  }, [isOpen]);

  return (
    <div
      ref={collapseRef}
      className={`collapse-container ${isOpen ? 'open' : 'closed'}`}
      onClick={toggleCollapse}
      onTransitionEnd={() => adjustFooterPosition()} // Utiliser une fonction inline
    >
      <div className="collapse-header">
        <h3>Description</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      {isOpen && (
        <div>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default DescriptionCollapse;






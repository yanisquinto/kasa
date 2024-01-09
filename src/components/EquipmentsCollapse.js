import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './styles/components/collapse-equipments.scss';

const EquipmentsCollapse = ({ equipments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const collapseRef = useRef(null);

  const adjustFooterPosition = () => {
    const collapseHeight = collapseRef.current.offsetHeight;
    const footer = document.querySelector('footer');
    footer.style.transform = isOpen ? `translateY(${collapseHeight}px)` : 'translateY(0)';
  };

  useEffect(() => {
    adjustFooterPosition();
  }, [isOpen]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={collapseRef}
      className={`collapse-container2 ${isOpen ? 'open' : 'closed'}`}
      onTransitionEnd={adjustFooterPosition}
    >
      <div onClick={toggleCollapse} className="collapse-header">
        <h3>Equipements</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      {isOpen && (
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EquipmentsCollapse;


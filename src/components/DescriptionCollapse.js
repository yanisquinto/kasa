import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './styles/components/collapse-description.scss';

const DescriptionCollapse = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${isOpen ? 'open' : 'closed'}`} onClick={toggleCollapse}>
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

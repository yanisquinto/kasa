import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './styles/components/collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`custom-collapse-container ${isOpen ? 'custom-open' : 'custom-closed'}`}>
      <div onClick={toggleCollapse} className="custom-collapse-header">
        <h3 className='custom-titlecollapse'>{title}</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="custom-svg" />
      </div>
      {isOpen && (
        <div className="custom-p">
          {content}
        </div>
      )}
    </div>
  );
};

export default Collapse;

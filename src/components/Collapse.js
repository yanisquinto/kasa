import React, { useState } from 'react';
import './styles/components/collapse.scss'

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse'>
      <div onClick={toggleCollapse} className='collapse'>
        <h3></h3>
      </div>
      {isOpen && (
        <div>
          {content}
        </div>
      )}
    </div>
  );
};

export default Collapse;

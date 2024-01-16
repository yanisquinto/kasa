// Collapse.js - CORRIGE SELON LES DEMANDES DE L EVALUATEUR - 
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './styles-components/collapse.scss';

const Collapse = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      // Si content est un tableau, on suppose que c'est une liste d'éléments (dans notre cas une liste)
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return content; // Sinon, affiche le contenu tel quel (dans le cas où c'est une description par exemple)
    }
  };

  return (
    //faire en sorte qu'une classe CSS personnalisée puisse être mise en priorité de celle définie par défaut
    <div className={`${className || ''} custom-collapse-container ${isOpen ? 'custom-open' : 'custom-closed'}`}> 
      <div onClick={toggleCollapse} className="custom-collapse-header">
        {title && <h3 className='custom-titlecollapse'>{title}</h3>}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="custom-svg" />
      </div>
      {isOpen && (
        <div className="custom-p">
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default Collapse;

// Le souci des collapses qui debordent sur le footer a été réglé 
// en ne mettant qu'un seul composant adaptable à toutes les collapses

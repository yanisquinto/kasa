import React from 'react';
import './styles-components/tag.scss'

const Tag = ({ text }) => {
  return (
    <p className="tag">{text}</p>
  );
};

export default Tag;

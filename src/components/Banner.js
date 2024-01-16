import React from 'react';
import './styles-components/banner.scss';

function Banner({ imageUrl, text }) {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Bannière" />
      <p className="banner-text">Chez vous, partout et ailleurs</p>
    </div>
  );
} 

export default Banner;

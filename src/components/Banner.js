import React from 'react';
import './styles/components/banner.scss';

function Banner({ imageUrl, text }) {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Bannière" />
      <p className="banner-text">{text}</p>
    </div>
  );
}

export default Banner;

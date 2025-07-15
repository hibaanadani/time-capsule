import React from 'react';
import './style.css';

const ImageCard = ({ imageSrc, imageAlt = 'Memory Image', onClick }) => {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={imageSrc} alt={imageAlt} className="image-card-img" />
    </div>
  );
};

export default ImageCard;
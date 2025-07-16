import React from 'react';
import './style.css';

const ImageCard = ({ imageSrc, imageAlt = 'Capsule Image', onClickListener }) => {
  return (
    <div className="image-card" onClick={onClickListener}>
      <img src={imageSrc} alt={imageAlt} className="image-card-img" />
    </div>
  );
};

export default ImageCard;
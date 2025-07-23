import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ImageCard = ({ messageId, imageUrl }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/opened-message/${messageId}`); 
    };

  return (
    <div className="image-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <img 
          src={imageUrl} 
          alt={`Message image ${messageId}`} 
          className="image-card__image" 
        />
    </div>
  );
};
export default ImageCard;
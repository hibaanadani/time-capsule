import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ImageCard = ({ messageId, imageUrl, messageText }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/opened-message/${messageId}`); 
    };

    const altText = messageText ? messageText.substring(0, 50) + '...' : 'Message image';

    return (
        <div className="image-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            {imageUrl && (
                <img 
                    src={imageUrl} 
                    alt={altText} 
                    className="image-card-img" 
                />
            )}
        </div>
    );
};

export default ImageCard;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const MessageCard = ({ messageId, messageTitle, messageText }) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/read-capsule/${messageId}`);
    };

    const safeMessageText = messageText || ''; 
    const snippetLength = 100;
    const messageSnippet = safeMessageText.length > snippetLength
        ? safeMessageText.substring(0, snippetLength) + '...'
        : safeMessageText;

    return (
        <div className="message-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <h3 className="card-title">{messageTitle}</h3>
            <p className="card-text">{messageSnippet}</p>
        </div>
    );
};

export default MessageCard;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MessageCard.css'; // Make sure this CSS file exists

const MessageCard = ({ messageId, messageText, mood, imageUrl, audioUrl, revealDate, privacy }) => {
    const navigate = useNavigate();

    const formattedRevealDate = revealDate ? new Date(revealDate).toLocaleDateString() : 'N/A';

    const handleCardClick = () => {
        // Navigate to the OpenedMessage route using the messageId
        navigate(`/opened-message/${messageId}`);
    };

    const snippetLength = 100;
    const messageSnippet = messageText.length > snippetLength
        ? messageText.substring(0, snippetLength) + '...'
        : messageText;

    return (
        <div className="message-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <p className="card-text">{messageSnippet}</p>
            {mood && <p className="card-detail">Mood: {mood}</p>}
            {imageUrl && <p className="card-detail">Image attached <span role="img" aria-label="camera">📸</span></p>}
            {audioUrl && <p className="card-detail">Audio attached <span role="img" aria-label="microphone">🎤</span></p>}

            <p className="card-detail">Reveal Date: {formattedRevealDate}</p>
            <p className="card-detail">Privacy: {privacy}</p>
        </div>
    );
};

export default MessageCard;
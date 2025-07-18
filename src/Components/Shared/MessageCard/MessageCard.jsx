import React from 'react';
import './style.css';

const MessageCard = ({ snippet, onClickListener }) => {
    return (
        <div className="message-card-container" onClick={onClickListener}>
            <p className="message-card-snippet">{snippet}</p>
        </div>
    );
};

export default MessageCard;
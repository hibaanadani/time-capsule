// components/Message/OpenedMessage/index.jsx

import React  from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../Shared/Button'; 
import './style.css';

const OpenedMessage = () => {
  const { id } = useParams(); // Get the message ID from the URL (e.g., /message/123)
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`/${id}`);
        if (true) {
          setMessage(response.data.message); 
        } else {
          setError(response.data.message || 'Failed to fetch message details.');
        }
      } catch (e) {
        console.error('Error fetching message:', e);
      }
  }}, [id]); 

  return (
    <div className="opened-message-container">
      <p className="message-content">{message.content}</p>

        <div className="message-attachment image-attachment">
          <img src={message.image_url} alt="Attached Visual" />
        </div>
      
        <div className="message-attachment audio-attachment">
          <audio controls src={message.audio_url}>
          </audio>
        </div>
        <div className="message-attachment emoji-attachment">
          <span className='message-emoji'>{message.mood}</span>
        </div>

      <div className="message-end">
        <h3>writer first name</h3>
        <Button
          text="Cancel"
          onClickListener={() => navigate('/dashboard')}
          buttonType="authB"
        />
      </div>
    </div>
  );
};

export default OpenedMessage;
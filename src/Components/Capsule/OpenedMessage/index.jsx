import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import Button from '../../Shared/Button';
import { toast } from 'react-toastify';

const OpenedMessage = () => {
    const navigate = useNavigate();
    const { messageId } = useParams();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('user_id');

        if (!token || !userId) {
            toast.error("You need to be logged in to view messages.");
            navigate('/auth');
            return;
        }

        if (!messageId) {
            toast.warn("No message specified to open.");
            navigate('/dashboard'); 
            return;
        }

        const fetchMessage = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/get_message/${messageId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (res.status === 200) {
                    setMessage(res.data.payload);
                    toast.success("Message loaded successfully!"); 
                } else {
                    toast.error("Failed to load message: " + (res.data.message || "No data received."));
                    navigate('/dashboard'); 
                }
            } catch (e) {
                console.error("Error fetching message:", e.response?.data?.message || e.message);
                toast.error("Error loading message. " + (e.response?.data?.message || "Please try again."));
                navigate('/dashboard');
            }
        };

        fetchMessage();
    }, [messageId, navigate]); 

    return (
        <div className="opened-message-container">
            <p className="message-content">{message.message}</p> 

            {message.image_url && (
                <div className="message-attachment image-attachment">
                    <img src={message.image_url} alt="Attached Visual" />
                </div>
            )}

            {message.audio_url && ( 
                <div className="message-attachment audio-attachment">
                    <audio controls src={message.audio_url}>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}

            {message.mood && (
                <div className="message-attachment emoji-attachment">
                    <span className='message-emoji'>{message.mood}</span>
                </div>
            )}
                <div className="message-details-section">
                    {message.reveal_date && <p className="message-detail"><strong>Reveal Date:</strong> {new Date(message.reveal_date).toLocaleDateString()}</p>}
                    {message.privacy && <p className="message-detail"><strong>Privacy:</strong> {message.privacy}</p>}
                    {message.location && <p className="message-detail"><strong>Location:</strong> {message.location}</p>}
                    {message.ipaddress && <p className="message-detail"><strong>IP Address:</strong> {message.ipaddress}</p>}
                    {message.created_at && <p className="message-detail"><strong>Created On:</strong> {new Date(message.created_at).toLocaleDateString()}</p>}
                </div>


            <div className="message-end">
                <h3>{message.sender_first_name || 'Anonymous'}</h3>
                <Button
                    text="Back to Dashboard" 
                    onClickListener={() => navigate('/dashboard')}
                    buttonType="authB"
                />
            </div>
        </div>
    );
};

export default OpenedMessage;
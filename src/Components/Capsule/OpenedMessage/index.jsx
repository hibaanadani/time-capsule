import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../Shared/Button';
import { toast } from 'react-toastify';

const OpenedMessage = () => {
    const navigate = useNavigate();
    const { messageId } = useParams();
    const [message, setMessage] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const loggedInUserId = localStorage.getItem('user_id');

        if (!token || !loggedInUserId) {
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
                const res = await axios.get(`http://localhost:8000/api/v0.1/user/messages/${messageId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (res.status === 200 && res.data.payload) {
                    setMessage(res.data.payload);
                    toast.success("Message loaded successfully!");
                } else {
                    const messageError = res.data.message || "No message data received.";
                    toast.error("Failed to load message: " + messageError);
                    navigate('/dashboard');
                }
            } catch (e) {
                const apiError = e.response?.data?.message || e.message || "Please try again.";
                console.error("Error fetching message:", apiError);
                toast.error("Error loading message. " + apiError);
                navigate('/dashboard');
            }
        };

        fetchMessage();
    }, [messageId, navigate]);

    useEffect(() => {
        if (message && message.user_id) {
            const token = localStorage.getItem('token');

            const fetchUserData = async () => {
                try {
                    const userRes = await axios.get(`http://localhost:8000/api/v0.1/user/users/${message.user_id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (userRes.status === 200 && userRes.data.payload) {
                        setUser(userRes.data.payload);
                    } else {
                        toast.error("Failed to fetch sender details.");
                        setUser({ first_name: 'Unknown User' });
                    }
                } catch (userError) {
                    console.error("Error fetching user data:", userError.response?.data?.message || userError.message);
                    toast.error("Error fetching sender details.");
                    setUser({ first_name: 'Unknown User' });
                }
            };
            fetchUserData();
        } else if (message && !message.user_id) {
            setUser({ first_name: 'Anonymous' });
        }
    }, [message]);

    const handleDelete = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error("You need to be logged in to delete messages.");
            return;
        }
        try {
            const res = await axios.post(`http://localhost:8000/api/v0.1/user/delete_message/${messageId}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.status === 200) {
                toast.success("Message deleted successfully.");
                navigate('/dashboard');
            } else {
                toast.error("Failed to delete message.");
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "An unknown error occurred.";
            toast.error(`Error deleting message: ${errorMessage}`);
        }
    };

    if (!message) {
        return <p>Loading full message...</p>;
    }

    const loggedInUserId = localStorage.getItem('user_id');
    console.log("Debug: loggedInUserId from localStorage:", loggedInUserId);
    console.log("Debug: message.user_id:", message.user_id);

    return (
        <div className="opened-message-container">
            <div className="opened-message-wrapper">
                {message.title ? <h3 className="message-title">{message.title}</h3> : null}
                {message.message ? <p className="message-content">{message.message}</p> : null}

                <div className="message-details-section">
                    {message.reveal_date ? <p className="message-detail"><strong>Reveal Date:</strong> {new Date(message.reveal_date).toLocaleDateString()}</p> : null}
                    {message.privacy ? <p className="message-detail"><strong>Privacy:</strong> {message.privacy}</p> : null}
                    {message.location ? <p className="message-detail"><strong>Location:</strong> {message.location}</p> : null}
                    {message.ipaddress ? <p className="message-detail"><strong>IP Address:</strong> {message.ipaddress}</p> : null}
                </div>
                <div className='media- details-section'>
                       {message.image !== null && message.image !== '' ? (
                    <div className="message-attachment image-attachment">
                        <img src={message.image} alt="Attached Visual" />
                    </div>
                ) : null}

                {message.audio !== null && message.audio !== '' ? (
                    <div className="message-attachment audio-attachment">
                        <audio controls src={message.audio}>
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                ) : null}

                {message.mood !== null && message.mood !== '' ? (
                    <div className="message-attachment emoji-attachment">
                        <span className='message-emoji'>{message.mood}</span>
                    </div>
                ) : null}
                </div>

                <div className="end-container">
                    <h3>{user ? (user.first_name || 'Anonymous') : 'Loading Sender...'}</h3>
                <Button
                    text="Back to Dashboard"
                    onClickListener={() => navigate('/dashboard')}
                    buttonType="authB"
                />
                {loggedInUserId == message.user_id && (
                    <Button
                        text="Delete Message"
                        onClickListener={handleDelete}
                        buttonType="primary"
                    />
                )}
                </div>
            </div>
        </div>
    );
};
export default OpenedMessage;
import React, { useEffect, useState } from "react";
import Button from "../../Shared/Button";
import { useLocation, useNavigate } from "react-router-dom";
import EmojiPicker from 'emoji-picker-react';
import {toast} from "react-toastify";
import Input from "../../Shared/Input/Index";
import axios from "axios";

const MessageForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [content, setContent] = useState('');
    const [mood, setMood] = useState('');
    const [imageattachment, setImageAttachment] = useState(null);
    const [audioattachment, setAudioAttachment] = useState(null);
    const [emojipickerOpen, setEmojiPickerOpen] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('token'); 

        if (!userId || !token) {
            toast.error("You need to be logged in to create a message.");
            navigate('/auth');
            return;
        }

         if (location.state && location.state.messageData) {
            const { message, mood, image, audio } = location.state.messageData;
            setContent(message || '');
            setMood(mood || '');
            setImageAttachment(image || null);
            setAudioAttachment(audio || null);
        }

        const fetchUserData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/users/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (res.status === 200) {
                    setUsername(res.data.payload.first_name || res.data.payload.username || 'User');
                } else {
                    toast.error("Failed to fetch user details.");
                    setUsername('User'); 
                }
            } catch (error) {
                console.error("Error fetching user data:", error.response?.data?.message || error.message);
                toast.error("Error fetching user details.");
                setUsername('User');
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImageAttachment(e.target.files[0]);
        }
    };

    const handleAudioChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setAudioAttachment(e.target.files[0]);
        }
    };

    const handleNext = () => {
        if (!content) {
            toast.warn("Please write your message content.");
            return;
        }

        const messageData = {
            message: content,
            mood: mood,
            image: imageattachment,
            audio: audioattachment,
        };
        navigate('/capsule-info', { state: { messageData } });
    };

    function handleEmojiSelect(emojiObject) {
      setMood(emojiObject.emoji);
      setEmojiPickerOpen(false);
    }

    return (
        <div className="message-form">
            <h2 className="create-msge-title">Send Your Message Forward</h2>

            <Input
                as="textarea"
                name={"content"}
                hint={"Write your message here"}
                value={content}
                onChangeListener={(e) => {
                    setContent(e.target.value);
                }}
                required={true}
                rows={6}
                cols={60}
            />

            <div className="input-form">
                <label htmlFor="image-upload" className="file-input-label">
                    <input
                        id="image-upload"
                        type="file"
                        className="image-attachment"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    {imageattachment ? `Image: ${imageattachment.name}` : '📸'}
                </label>

                <label htmlFor="audio-upload" className="file-input-label">
                    <input
                        id="audio-upload"
                        type="file"
                        className="audio-attachment"
                        accept="audio/*"
                        capture="microphone"
                        onChange={handleAudioChange}
                        style={{ display: 'none' }}
                    />
                    {audioattachment ? `Audio: ${audioattachment.name}` : '🎤'}
                </label>
                <Button
                    text="Select Mood"
                    onClickListener={() => setEmojiPickerOpen(!emojipickerOpen)}
                    buttonType="notPrimary"
                />
                {emojipickerOpen && (
                    <div className="emoji-picker-container">
                        <EmojiPicker onEmojiClick={handleEmojiSelect} />
                    </div>
                )}
                {mood && <span className="selected-mood">Mood: {mood}</span>}
            </div>
            <h3 className="senderName">{username}</h3>
            <Button text={"Next: Delivery Details"} buttonType="authB" onClickListener={handleNext} />
        </div>
    );
};

export default MessageForm;
import React, { useState } from "react";
import Button from "../../Shared/Button";
import { useNavigate } from "react-router-dom";
import EmojiPicker from 'emoji-picker-react';
import { Paperclip } from 'lucide-react';
import {toast} from "react-toastify";
import Input from "../../Shared/Input/Index";

const MessageForm = () => { 
    const navigate = useNavigate();

    const [content, setContent] = useState('');
    const [mood, setMood] = useState('');
    const [imageattachment, setImageAttachment] = useState(null);
    const [audioattachment, setAudioAttachment] = useState(null);
    const [emojipickerOpen, setEmojiPickerOpen] = useState(false);

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

    // Removed handleClear and postMessage functions as they belong to MessageInfo now

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

            <Paperclip size={24} className="paper-clip-icon"/>
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
                    {imageattachment ? `Image: ${imageattachment.name}` : 'Attach Image'}
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
                    {audioattachment ? `Audio: ${audioattachment.name}` : 'Attach Audio (or Record)'}
                </label>
                <Button
                    text="Select Mood"
                    onClickListener={() => setEmojiPickerOpen(!emojipickerOpen)}
                    buttonType="secondary"
                />
                {emojipickerOpen && (
                    <div className="emoji-picker-container">
                        <EmojiPicker onEmojiClick={handleEmojiSelect} />
                    </div>
                )}
                {mood && <span className="selected-mood">Mood: {mood}</span>}
            </div>
            <h3 className="senderName"> name</h3>
            <Button text={"Next: Delivery Details"} buttonType="authB" onClickListener={handleNext} />
        </div>
    );
};

export default MessageForm;
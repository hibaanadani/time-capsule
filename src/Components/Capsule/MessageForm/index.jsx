import React from "react";
import './style.css';
import Button from "../../Shared/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmojiPicker from 'emoji-picker-react';
import { Paperclip } from 'lucide-react';
import {toast} from "react-toastify";


const MessageForm =()=>{
    const navigate= useNavigate();

    const [content,setContent] =useState('');
    const [mood,setMood] =useState('');
    const [imageattachment,setImageAttachmnet] =useState(null);
    const [audioattachment,setAudioAttachment] =useState(null);

    const handleClear = () => {
        setContent('');
        setRevealDate('');
        setPrivacy('');
        setMood('');
        setImageFile(null);
        setAudioFile(null);
        setShowEmojiPicker(false);
  };

    const postMessage = async() =>{
        try{
            const response = await axios.post("http://localhost:8000/api/messages/", {
                content: content,
                revealdate:revealdate,
                privacy:privacy,
                mood:mood,
                imageattachment:imageattachment,
                audioattachment:audioattachment,
        });   
        
            if(res.status === 200 ){
                toast.success("Login successful!");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000); 
                handleClear;
            }else{
                toast.error("message creation failed");
            }
        }
        catch(e){
            console.error("Login error:", e.response.data.message);
            toast.error("an error occurred! Please try again.")
        }
    }
    function handleEmojiSelect(emojiObject) {
      setMood(emojiObject.emoji); 
    }

    return(
        <div className="message-form">
            <h2 className="create-msge-title">Send Your Message Forward</h2>
            <textarea className="msge-textarea" value={content} onChange={(e.target.value)} rows={5} cols={60}>Write your letter here</textarea>
            <Paperclip size={24} className="paper-clip-icon"/>
            <div className="input-form">
                <input type="file" className="image-attachment" accept="image/*" />
                <input type="file" className="audio-attachment" accept="audio/*" />
                <EmojiPicker className="emoji-picker" onEmojiClick={handleEmojiSelect} />
            </div>
            <h3 className="senderName"> {props.name}</h3>
            <Button text={Submit} buttonType="authB" onClickListener={postMessage} />
        </div>
    );
};

export default MessageForm;
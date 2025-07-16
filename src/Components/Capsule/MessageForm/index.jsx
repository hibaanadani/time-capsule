import React from "react";
import './style.css';
import Button from "../../Shared/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MessageForm =()=>{
    const navigate= useNavigate();

    const [content,setContent] =useState('');
    const [revealdate,setRevealDate] =useState('');
    const [privacy,setPrivacy] =useState('');
    const [mood,setMood] =useState('');
    const [imageattachment,setImageAttachmnet] =useState('');
    const [videoattachment,setVideoAttachment] =useState('');

    const postMessage = async() =>{
        try{
            const response = await axios.post("loginurl", {
                content: content,
                revealdate:revealdate,
                privacy:privacy,
                mood:mood,
        });   
            if(true){
                navigate("/dashboard");
            }else{
                alert("message creation failed");
            }}
        catch(e){
            console.error('An error occured while creating message');
        }
    }

    return(
        <div className="message-form">
            <h2 className="create-msge-title">Send Your Message Forward</h2>

            <textarea className="msge-textarea" value={content} onChange={(e.target.value)} rows={5} cols={60}>Write your letter here</textarea>

            <h3 className="senderName"> {props.name}</h3>
        </div>
    );
};

export default MessageForm;
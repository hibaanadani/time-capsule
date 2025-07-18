import OpenedMessage from "../../Capsule/OpenedMessage";
import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const MessageCard=({message})=>{
    const navigate= useNavigate();

    const viewMessage=()=>{
        if(message){
            navigate('')
        }
    }

    let messages=""
    return(
        <div className='messageCard'>
        </div>
    );
} 
export default MessageCard
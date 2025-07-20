 import React from "react";
import './style.css';
import Button from "../../Shared/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../Shared/Input";

const MessageInfo=()=>{
    const navigate=useNavigate();
    const location=useLocation();

    const messageId=location.state?.messageId;

    const [revealdate,setRevealDate] =useState('');
    const [privacy,setPrivacy] =useState('');
    const [surpriseMode, setSurpriseMode] =useState(false);
    const [gpsLocation, setGpsLocation] = useState('');
    const [ipAddress, setIpAddress] = useState('');

    const handleSubmit = async() =>{
        try{
            const response = await axios.put('http://localhost:8000/api/add_update_message/',{
                revealdate:revealdate,
                privacy:privacy,
                surpriseMode: surpriseMode ? 1:0,
                gpsLocation:gpsLocation,
                ipAddress:ipAddress,
            })
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
    };
    

    return(
        <div className="message-info-container">
            <h2 className="message-info-title"> Message Delivery Details</h2>
            <Input name="revealDate" hint="ex:26/12/2026" type="date" value={revealdate} onChangeListener={(e) => setRevealDate()} required={true} />
            <Input name="privacy" hint="private" type="date" value={revealdate} onChangeListener={(e) => setPrivacy()} required={true} />
            <Input name="surpriseMode" hint="" type="date" value={revealdate} onChangeListener={(e) => setPrivacy()} required={true} />
            <Button text="Send Message" onClickListener={handleSubmit} buttonType="authB"/>
        </div>
    );
};
export default MessageInfo;
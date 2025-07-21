import React from "react";
import Button from "../../Shared/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../Shared/Input/Index";
import { toast } from "react-toastify";

const MessageInfo =({toggle})=>{
    const navigate= useNavigate();

    const [revealdate,setRevealDate] =useState('');
    const [privacy,setPrivacy] =useState('');
    const [surprisemode, setSurpriseMode] =useState(false);
    const [color,setColor] =useState('');
    const [gpsLocation, setGpsLocation] = useState('');
    const [ipAddress, setIpAddress] = useState('');

    const handleSubmit = async() =>{
        try{
            const res = await axios.put('http://localhost:8000/api/add_update_message/',{
                reveal_date:revealdate,
                privacy:privacy,
                surprise_mode: surprisemode ? 1:0,
                location:gpsLocation,
                ipaddress:ipAddress,
            })
           if(res.status === 200 ){
                        toast.success("Login successful!");
                        setTimeout(() => {
                            navigate("/dashboard");
                        }, 1000); 
                    }else{
                        toast.error("message creation failed");
                    }
                }
                catch(e){
                    console.error("Login error:", e.response.data.message);
                    toast.error("an error occurred! Please try again.")
                }
    };
    
    const handleToggleBack = () => {
    toggle();
  };

    return(
        <div className="message-info-container">
            <button onClick={handleToggleBack}>  ← Back</button>
            <h2 className="message-info-title"> Message Delivery Details</h2>
            <Input name="revealDate" hint="ex:26/12/2026" type="date" value={revealdate} onChangeListener={(e) => setRevealDate(e.target.value)} required={true} />
            <Input name="privacy" hint="private" type="checkbox" value={privacy} onChangeListener={(e) => setPrivacy(e.target.value)} required={true} />
            <Input name="surprisemode" hint="" type="radio" value={surprisemode} onChangeListener={(e) => setSurpriseMode(e.target.value)} required={true} />
            <Input name="color" hint="Color:Yellow" type="color" value={color} onChangeListener={(e) => setColor(e.target.value)} required={true} />
            <Button text="Send Message" onClickListener={handleSubmit} buttonType="authB"/>
        </div>
    );
};
export default MessageInfo;
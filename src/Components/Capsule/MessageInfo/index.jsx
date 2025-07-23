import React, { useEffect, useState } from "react";
import Button from "../../Shared/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../Shared/Input/Index";
import { toast } from "react-toastify";

const MessageInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { messageData } = location.state || {};
    const [title, setTitle] = useState(messageData?.title || '');
    const [revealdate, setRevealDate] = useState('');
    const [privacy, setPrivacy] = useState('public');
    const [surprisemode, setSurpriseMode] = useState(false);
    const [color, setColor] = useState('');
    const [gpsLocation, setGpsLocation] = useState('');
    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            toast.error("You need to be logged in to create a message.");
            navigate('/auth');
            return;
        }

        if (!messageData) {
            toast.warn("Please create your message content first.");
            navigate('/create-capsule');
        }
    }, [navigate, messageData]);

    const handleSubmit = async () => {
        if (!messageData) {
            toast.error("Message content is missing. Please go back and create it.");
            return;
        }

        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('user_id');
        if (!token || !userId) {
            toast.error("Authentication token or user ID not found. Please log in again.");
            navigate('/authentication');
            return;
        }
        const formData = new FormData();
        formData.append('message', messageData.message);
        formData.append('mood', messageData.mood);

        if (messageData.image) {
            formData.append('image', messageData.image);
        }
        if (messageData.audio) {
            formData.append('audio', messageData.audio);
        }
        formData.append('title', title);
        formData.append('reveal_date', revealdate);
        formData.append('privacy', privacy);
        formData.append('surprise_mode', surprisemode ? 1 : 0);
        formData.append('color', color);
        if (gpsLocation) formData.append('location', gpsLocation);
        if (ipAddress) formData.append('ipaddress', ipAddress);
        formData.append('user_id', userId); 

        try {
            const res = await axios.post('http://localhost:8000/api/add_message', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.status === 200 || res.status === 201) {
                toast.success("Message created successfully!");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
            } else {
                toast.error("Message creation failed. Server responded with an unexpected status or data.");
            }
        } catch (e) {
            console.error("Message creation error:", e.response?.data?.message || e.message);
            const errorMessage = e.response?.data?.message || e.message || "An unknown error occurred.";
            toast.error(`Message creation failed: ${errorMessage}`);
        }
    };

    const handleToggleBack = () => {
        navigate("/create-capsule", { state: { messageData } });
    };

    return (
        <div className="message-info-container">
            <h2 className="message-info-title"> Message Delivery Details</h2>

            {messageData?.message && <p>Message Preview: {messageData.message.substring(0, 100)}...</p>}

            <Input name="title" hint="Enter title" type="text" value={title} onChangeListener={(e) => setTitle(e.target.value)} required={true} />

            <Input name="revealDate" hint="ex:26/12/2026" type="date" value={revealdate} onChangeListener={(e) => setRevealDate(e.target.value)} required={true} />

            <div className="input-group">
                <label htmlFor="privacy-select">Privacy:</label>
                <select id="privacy-select" value={privacy} onChange={(e) => setPrivacy(e.target.value)} required>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="friends">Limited</option>
                </select>
            </div>

            <div className="input-group">
                <input
                    type="checkbox"
                    id="surpriseMode"
                    checked={surprisemode}
                    onChange={(e) => setSurpriseMode(e.target.checked)}
                />
                <label htmlFor="surpriseMode">Surprise Mode</label>
            </div>

            <label htmlFor="color-input">Color:</label>
            <Input className="color-box" name="color" hint="Select a color" type="color" value={color} onChangeListener={(e) => setColor(e.target.value)} required={true} />
            <Input name="gpsLocation" hint="Enter approximate location (e.g., city)" type="text" value={gpsLocation} onChangeListener={(e) => setGpsLocation(e.target.value)} />
            <Input name="ipAddress" hint="Enter IP Address" type="text" value={ipAddress} onChangeListener={(e) => setIpAddress(e.target.value)} />

            <Button text="Send Message" onClickListener={handleSubmit} buttonType="authB"/>
            <Button text={"← Back"} onClickListener={handleToggleBack} buttonType="notPrimary"/>
        </div>
    );
};
export default MessageInfo;
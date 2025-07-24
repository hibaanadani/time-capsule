import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from '../../Components/Shared/Header';
import Footer from '../../Components/Shared/Footer';
import Section from '../../Components/Shared/Section';
import ImageCard from '../../Components/Shared/ImageCard';
import MessageCard from '../../Components/Shared/MessageCard/MessageCard.jsx';

const Home = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/v0.1/public_opened'); 

                if (res.status === 200 && Array.isArray(res.data.payload)) {
                    setMessages(res.data.payload);
                } else {
                    console.error('API response not as expected:', res.data);
                }
            } catch (err) {
                console.error('Error fetching public opened messages for Home page:', err.response?.data?.message || err.message);
            } 
        };

        fetchMessages();
    }, []);

    const imageMessages = messages.filter(msg => msg.image).slice(0, 3);; 
    const textMessages = messages.filter(msg => !msg.image);

    return (
        <div className="home-page">
            <Header/>
            <div className="home-main">
                <Section title="Capture a Past Moment for the Future"
                    description="Collect all your favorite memories in a time capsule and save them. Share those stories later."
                    buttonText="Capture Moment"
                    onClickListener={()=>navigate('create-capsule')}
                    buttonType="notPrimary"
                    image="/images/header.png"
                />

                <div className="image-cards-section">
                    <h2>Creating a Long Lasting Memory</h2>
                    <div className="image-cards">
                        {imageMessages.map(message => (
                            <ImageCard 
                                key={message.id} 
                                messageId={message.id}
                                imageUrl={message.image} 
                            />
                        ))}
                        {imageMessages.length === 0 && <p>No image messages to display yet.</p>}
                    </div>
                </div>
                
                <Section title="Send a Note To Your Future Self"
                    description="Preserve your thoughts, memories, and hopes. Open it later, exactly when you need it."
                    buttonText="Send Note"
                    onClickListener={()=>navigate('create-capsule')}
                    buttonType="notPrimary"
                    image="/images/lettersection.jpg"
                    imageLeft={true}
                />

                <div className="message-cards-section">
                    <h2>Top Interacted With Messages</h2>
                    <div className="message-cards">
                        {textMessages.map(message => (
                            <MessageCard 
                                key={message.id}
                                messageId={message.id}
                                messageTitle={message.title} 
                                messageText={message.message}
                            />
                        ))}
                        {textMessages.length === 0 && <p>No text messages to display yet.</p>}
                    </div>
                </div>
            </div> 
            <Footer/>
        </div>
    );
};

export default Home;
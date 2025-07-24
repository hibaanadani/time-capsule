import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Shared/Header";
import Footer from "../../Components/Shared/Footer";
import MessageCard from "../../Components/Shared/MessageCard/MessageCard.jsx";
import ImageCard from "../../Components/Shared/ImageCard";
import Section from "../../Components/Shared/Section";
import './style.css';
import { toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [userMessages, setUserMessages] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');

    if (!userId || !token) {
      toast.error("You need to be logged in to access the dashboard.");
      navigate('/auth');
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v0.1/user/users/${userId}`, {
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

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');

    if (!userId || !token) {
      return;
    }

    const fetchMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v0.1/user/get_messages_by_userid/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (res.status === 200 && Array.isArray(res.data.payload)) {
          setUserMessages(res.data.payload);
        } else {
          console.error('API response for user messages not as expected:', res.data);
        }
      } catch (err) {
        console.error("Error fetching user messages:", err.response?.data?.message || err.message);
        if (err.response && err.response.status === 401) {
          toast.error("Session expired. Please log in again.");
          localStorage.removeItem('token');
          localStorage.removeItem('user_id');
          navigate('/auth');
        }
      } 
    };

    fetchMessages();
  }, [navigate]);

  const imageMessages = userMessages.filter(msg => msg.image);
  const textMessages = userMessages.filter(msg => !msg.image);

  return (
    <div className="dash-page">
      <Header />
      <div>
        <Section
          title={`Hello, ${username}!`}
          description="Check your messages here!"
          buttonText="Create New Message"
          onClickListener={() => navigate('/create-capsule')}
          buttonType="notPrimary"
          image='/images/images.jpg'
        />
      </div>

      <div className="messages-dashboard-section">
        <h2>Your Messages</h2>

        {userMessages.length === 0 ? (
          <p className="no-messages-found">You haven't created any messages yet. Click "Create New Message" above to start!</p>
        ) : (
          <>
            <section className="dashboard-messages-with-images">
              <h3>Messages with Images ({imageMessages.length})</h3>
              <div className="dashboard-image-cards-grid">
                {imageMessages.length > 0 ? (
                  imageMessages.map(message => (
                    <ImageCard
                      key={message.id}
                      messageId={message.id}
                      imageUrl={message.image} 
                    />
                  ))
                ) : (
                  <p className="no-cards-msg">No image messages found in your collection.</p>
                )}
              </div>
            </section>

            <section className="dashboard-text-messages">
              <h3>Text-Only Messages ({textMessages.length})</h3>
              <div className="dashboard-message-cards-grid">
                {textMessages.length > 0 ? (
                  textMessages.map(message => (
                    <MessageCard
                      key={message.id}
                      messageId={message.id}
                      messageTitle={message.title}
                      messageText={message.message}
                    />
                  ))
                ) : (
                  <p className="no-cards-msg">No text messages found in your collection.</p>
                )}
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
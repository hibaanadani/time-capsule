import React from "react";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Shared/Header";
import Footer from "../../Components/Shared/Footer";
import MessageCard from "../../Components/Shared/MessageCard/MessageCard.jsx";
import Section from "../../Components/Shared/Section";
import './style.css';
import { toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

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

  return (
    <div className="dash-page">
      <Header />
      <div>
        <Section title={`Hello, ${username}!`}
          description="Check your opened messages here!!"
          buttonText="Send Note"
          onClickListener={()=>navigate('create-capsule')}
          buttonType="notPrimary"
          image='/images/images.jpg'
        />
        
      </div>
      <div className="messageCardsDashboard">
      <p className="dash-subtext">
       Check your opened messages here!!
      </p>
      <MessageCard/>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

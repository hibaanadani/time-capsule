import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Shared/Header";
import Footer from "../../Components/Shared/Footer";
import MessageCard from "../../Components/Shared/MessageCard/MessageCard.jsx";
import Section from "../../Components/Shared/Section";
import './style.css';
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();

   useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      toast.error("You need to be logged in to access the dashboard.");
      navigate('/authentication');
    }
  }, [navigate]);

  return (
    <div className="dash-page">
      <Header />
      <div>
        <Section title="Hello !"
          description="Check your opened messages here!!"
          buttonText="Send Note"
          onClickListener={()=>navigate('create-capsule')}
          buttonType="notPrimary"
          image='/images/images.jpg'
          imageLeft={true}
        />
        
      </div>
      <p className="dash-subtext">
       Check your opened messages here!!
      </p>
      <Footer />
    </div>
  );
};

export default Dashboard;

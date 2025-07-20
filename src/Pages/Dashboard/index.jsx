import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Shared/Header";
import Footer from "../../Components/Shared/Footer";
import MessageCard from "../../Components/Shared/MessageCard/MessageCard.jsx";
import Section from "../../Components/Shared/Section";
import './style.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dash-page">
      <Header />
      <div>
        <Section title="Hello !"
          description="Check your opened messages here!!"
          buttonText="Send Note"
          onClickListener={()=>navigate('create-capsule')}
          buttonType="notPrimary"
          image='../'
          imageLeft={true}
        />
        
      </div>
      <p className="dash-subtext">
       Check your opened messages here!!
      </p>
    </div>
  );
};

export default Dashboard;

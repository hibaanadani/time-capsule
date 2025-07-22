import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Header from '../../Components/Shared/Header';
import Footer from '../../Components/Shared/Footer';
import Section from '../../Components/Shared/Section';
import ImageCard from '../../Components/Shared/ImageCard';
import MessageCard from '../../Components/Shared/MessageCard/MessageCard.jsx';

const Home = () => {
  const navigate = useNavigate();

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
              <ImageCard/>
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
              <MessageCard/>
            </div>
          </div>
          <Footer/>
    </div> 
    </div>
  );
};

export default Home;

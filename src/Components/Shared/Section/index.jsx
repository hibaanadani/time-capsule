import React from "react";
import "./style.css";
import Button from '../Button';

const Section = ({ title, description, buttonText, onClickListener, buttonType = "notPrimary", image , imageLeft= false}) => {
  return (
    <div  className={`section-container ${imageLeft ? 'image-left' : ''}`}>
      <div className="text-content">
        <h1 className="section-title">{title}</h1>
        <hr className="underline" />
       <p className="section-description">{description}</p>
          <Button
            text={buttonText}
            onClickListener={onClickListener}
            buttonType={buttonType}
          />
        </div>
        <div className="image-container">
            <div className="image-content">
                <img src={image} alt="Section Visual" className="section-image" />
            </div>
        </div>
    </div>
  );
};

export default Section;
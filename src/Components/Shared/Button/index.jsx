import React from "react";
import "./style.css"

const Button = ({ text,buttonType = "notPrimary" , onClickListener }) => { 
  const getButtonClassName = () => {
    switch (buttonType) {
      case "primary":
        return "primary";
      case "authB":
        return "authB"; 
      case "notPrimary":
      default:
        return "notPrimary"; 
    }
  };
  const buttonClassName = getButtonClassName();
    return(
        <button className={buttonClassName} onClick={onClickListener}>{text}</button>
    );
}
export default Button;
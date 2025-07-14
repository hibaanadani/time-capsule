import React from "react";
import "./style.css"

const Button = ({text, onClickListener}) =>{
    return(
        <button className={"notPrimary"} onClick={onClickListener}>{text}</button>
    );
}
export default Button;
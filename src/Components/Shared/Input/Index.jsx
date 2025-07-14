import React from "react";
import "./style.css";

const Input = ({username, hint, required, onChangeListener }) =>{
    return(
        <input 
        type="text"
        username={username}
        placeholder={hint}
        className="primary-input"
        required={required}
        onChange={onChangeListener}/>
    );
};
export default Input;
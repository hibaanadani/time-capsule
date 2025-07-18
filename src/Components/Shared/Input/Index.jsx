import React from "react";
import "./style.css";

const Input = ({name, hint, required, onChangeListener, value, type="text" }) =>{
    return(
        <input 
        type={type}
        name={name}
        value={value}
        placeholder={hint}
        className="primary-input"
        required={required}
        onChange={onChangeListener}/>
    );
};
export default Input;
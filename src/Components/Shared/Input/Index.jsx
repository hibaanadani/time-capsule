import React from "react";
import "./style.css";

const Input = ({name, hint, required, onChangeListener }) =>{
    return(
        <input 
        type="text"
        name={name}
        placeholder={hint}
        className="primary-input"
        required={required}
        onChange={onChangeListener}/>
    );
};
export default Input;
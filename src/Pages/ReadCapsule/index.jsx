import React from "react";
import "./style.css";
import OpenedMessage from "../../Components/Capsule/OpenedMessage";


const readCapsule = () =>{
        return(
            <div className="read-capsule-container">
                <OpenedMessage/>
            </div>
        );
}; 
export default readCapsule;

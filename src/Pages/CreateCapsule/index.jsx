import React, { useState } from "react";
import "./style.css";
import MessageForm from "../../Components/Capsule/MessageForm";
import MessageInfo from "../../Components/Capsule/MessageInfo";

const CreateCapsule = () => {
  const [isWritten, setIsWritten] = useState(true);

  const switchForm = () => {
    setIsWritten(!isWritten);
  };

  return (
    <div className="create-capsule">
      {isWritten ? (
        <MessageForm toggle={switchForm} />
      ) : (
        <MessageInfo toggle={switchForm} />
      )}
    </div>
  );
};

export default CreateCapsule;

import React, {useState} from "react";
import "./style.css";
import LoginForm from "../../Components/Authentication/LoginForm";
import SignUpForm from "../../Components/Authentication/SignUpForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        {isLogin ? (
          <LoginForm toggle={switchForm} />
        ) : (
          <SignUpForm toggle={switchForm} />
        )}
         </div>
        <div className="authImage-container"><img src="/images/stamp.png "alt="stamp" className="authImage"/></div>
    </div>
  );
};
export default Auth;
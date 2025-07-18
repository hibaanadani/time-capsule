import { useEffect, useState } from "react";
import Button from "../../Shared/Button";
import Input from "../../Shared/Input";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginForm = ({ toggle}) =>{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleLogin = async() => {
        try{
            const res= await axios.post("loginurl", {
                username: username,
                pass:password,
            });

            if(true){
                navigate("/dashboard");
            }else{
                alert("Login failed, please check credentials");
            }
        }
        catch (e){  
            console.error("Login error:", e);
            alert("an error occurred! Please try again.")
        }
    };

    return(
        <>
        <h2 className="auth-title"> Log In</h2>
        <Input
        name={"username"}
        hint={"johnDoe"}
        value={username}
        onChangeListener={(e) =>{
            setUsername(e.target.value);
        }}
        />
        <Input
        name={"password"}
        hint={"johnP@ssw0rd"}
        type={"password"}
        value={password}
        onChangeListener={(e) =>{
            setPassword(e.target.value);
        }}
        />
        <p className="auth-switch">
            Don't have an account? 
            <span className="auth-toggle" onClick={toggle}>
                {" "}Sign Up
            </span>
        </p>
        <Button
            text={"Log In"}
            onClickListener={handleLogin}
            buttonType={"authB"}
        />
        </>
       );
};
export default LoginForm;
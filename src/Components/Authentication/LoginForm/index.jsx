import React from "react";
import { useState } from "react";
import Button from "../../Shared/Button";
import Input from "../../Shared/Input/Index.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const LoginForm = ({ toggle}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async() => {
        if (!username || !password) {
            toast.warn("Please enter both username and password.");
            return; 
        }
        try{
            const res= await axios.post("http://localhost:8000/api/login", {
                username: username,
                password:password,
            });

            if(res.status === 200 ){
                toast.success("Login successful!");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000); 
            }else{
                toast.error("Login failed, please check credentials");
            }
        }
        catch (e){  
            const errorMessage=  e.response?.data?.message
            console.error("Login error:",errorMessage,e);
            toast.error("an error occurred! Please try again.")
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
        required={true}
        />
        <Input
        name={"password"}
        hint={"johnP@ssw0rd"}
        type={"password"}
        value={password}
        onChangeListener={(e) =>{
            setPassword(e.target.value);
        }}
        required={true}
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
import React from "react";
import Button from "../../Shared/Button";
import Input from "../../Shared/Input/Index";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

const SignUpForm = ({ toggle }) =>{
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] =useState('');
    const [username, setUsername] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    const navigate = useNavigate();

    const handleSignup = async() => {
        if (!firstname || !lastname || !username || !email || !password) {
            toast.warn("Please fill in all fields to sign up.");
            return;
        }try{
            const res= await axios.post("http://localhost:8000/api/register", {
                first_name:firstname,
                last_name: lastname,
                username: username,
                email: email,
                password:password,
            });

            if (res.status === 200) {
                localStorage.setItem('token', res.data.payload.token);
                localStorage.setItem('user_id', res.data.payload.id);
                toast.success("Signup successful! Welcome aboard.");
                setTimeout(() => {
                    navigate("/dashboard"); 
                }, 1000); 
            }else{
                toast.error("Signup failed, please check inputs");
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
    <h2 className="auth-title">Sign Up</h2>

    <Input name={"firstname"} hint={"Firstname: John"} value={firstname} onChangeListener={(e)=>setFirstName(e.target.value)} required={true}/>
    <Input name={"lastname"} hint={"Lastname: Doe"} value={lastname} onChangeListener={(e)=>setLastName(e.target.value)} required={true}/>
    <Input name={"username"} hint={"Username: johnDoe"} value={username} onChangeListener={(e)=>setUsername(e.target.value)} required={true}/>
    <Input type="email" name={"email"} hint={"Email: johnDoe@email.com"} value={email} onChangeListener={(e)=>setEmail(e.target.value)} required={true}/>
    <Input type="password" name={"password"} hint={"Password: johnP@ssw0rd"} value={password} onChangeListener={(e)=>setPassword(e.target.value)} required={true}/>
    
    <p className="auth-switch">
        Already have an account?
        <span className="auth-toggle" onClick={toggle}>
            {" "} Login
        </span>
    </p>

    <Button text={"Sign Up"} onClickListener={handleSignup} buttonType={"authB"}/>
    </>
    );
};

export default SignUpForm;
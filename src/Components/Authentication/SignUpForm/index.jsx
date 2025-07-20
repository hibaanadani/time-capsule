import Button from "../../Shared/Button";
import Input from "../../Shared/Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

const SignUpForm = ({ toggle }) =>{
    const [firstName, setFirstname] = useState();
    const [lastname, setLastname] =useState();
    const [username, setUsername] =useState();
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();

    const navigate = useNavigate();

    const handleLogin = async() => {
        if (!firstName || !lastname || !username || !email || !password) {
            toast.warn("Please fill in all fields to sign up.");
            return;
        }try{
            const res= await axios.post("http://localhost:8000/api/register", {
                firstName:firstName,
                lastname: lastname,
                username: username,
                email: email,
                password:password,
            });

            if(res.status === 200 ){
                toast.success("Signup successful! Welcome aboard.");
                setTimeout(() => {
                    navigate("/dashboard"); 
                }, 1000); 
            }else{
                toast.error("Signup failed, please check inputs");
            }
        }
        catch (e){  
            console.error("Login error:", e.response.data.message);
            toast.error("an error occurred! Please try again.")
        }
    };


    return(
    <>
    <h2 className="auth-title">Sign Up</h2>

    <Input name={"firstName"} hint={"John"} value={firstName} onChangeListener={(e)=>setFirstname(e.target.value)} required={true}/>
    <Input name={"lastName"} hint={"Doe"} value={lastname} onChangeListener={(e)=>setLastname(e.target.value)} required={true}/>
    <Input name={"username"} hint={"johnDoe"} value={username} onChangeListener={(e)=>setUsername(e.target.value)} required={true}/>
    <Input name={"email"} hint={"johnDoe@email.com"} value={email} onChangeListener={(e)=>setEmail(e.target.value)} required={true}/>
    <Input name={"password"} hint={"johnP@ssw0rd"} value={password} onChangeListener={(e)=>setPassword(e.target.value)} required={true}/>
    
    <p className="auth-switch">
        Already have an account?
        <span className="auth-toggle" onClick={toggle}>
            {" "} Login
        </span>
    </p>

    <Button text={"Sign Up"} onClickListener={handleLogin} buttonType={"authB"}/>
    </>
    );
};

export default SignUpForm;
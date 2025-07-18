import Button from "../../Shared/Button";
import Input from "../../Shared/Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ toggle }) =>{
    const [firstName, setFirstname] = useState();
    const [lastname, setLastname] =useState();
    const [username, setUsername] =useState();
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();

    const navigate = useNavigate();

    const handleLogin = async() => {
        try{
            const res= await axios.post("loginurl", {
                firstName:firstName,
                lastname: lastname,
                username: username,
                email: email,
                password:password,
            });

            if(true){
                navigate("/dashboard")
            }else{
                alert("Signup failed, please check inputs");
            }
        }
        catch (e){  
            console.error("Login error:", e);
            alert("an error occurred! Please try again.")
        }
    };


    return(
    <>
    <h1 className="auth-title">Sign Up</h1>

    <Input name={"firstName"} hint={"John"} value={firstName}/>
    <Input name={"lastName"} hint={"Doe"} value={lastname}/>
    <Input name={"username"} hint={"johnDoe"} value={username}/>
    <Input name={"email"} hint={"johnDoe@email.com"} value={email}/>
    <Input name={"password"} hint={"johnP@ssw0rd"} value={password}/>
    
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
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
            async () =>{
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
    }
        catch (e){  
            console.error("Login error:", e);
            alert("an error occurred! Please try again.")
        }
    };


    return(
    <>
    <h1 className="auth-title">Sign Up</h1>

    <Input name={"firstName"} hint={"John"}/>
    <Input name={"lastName"} hint={"Doe"}/>
    <Input name={"username"} hint={"johnDoe"}/>
    <Input name={"email"} hint={"johnDoe@email.com"}/>
    <Input name={"password"} hint={"johnP@ssw0rd"}/>
    
    <p className="auth-switch">
        Already have an account?
        <span className="auth-toggle" onClick={toggle}>
            {" "} Login
        </span>
    </p>

    <Button text={"Sign Up"} onClickListener={handleLogin}/>
    </>
    );
};

export default SignUpForm;
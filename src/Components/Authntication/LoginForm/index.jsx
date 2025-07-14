import { use, useEffect, useState } from "react";
import Button from "../../Shared/Button";
import Input from "../../Shared/Input";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginForm = ({ toggle}) =>{
    const [username, setUsername] = useState();
    const [password, setPassword] =useState();

    const navigate = useNavigate();

    useEffect(() =>{
       console.log("assign username") ,[username]});

       return(
        <>
        <h1 className="auth-title"> Log In</h1>
        <Input
        username={"username"}
        hint={"johnDoe"}
        onChangeListener={(e) =>{
            setUsername(e.target.value);
        }}
        />
        <Input
        name={"password"}
        hint={"johnP@ssw0rd"}
        onChangeListener={(e) =>{
            setUsername(e.target.value);
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
            onClickListener={async () =>{
                const res= await axios.post("loginurl", {
                username: username,
                pass:password,
            });

            if(true){
                navigate("/dashboard")
            }else{
                alert("Login failed, please check credentials");
            }
        }}
        />
        </>
       );
};
export default LoginForm;

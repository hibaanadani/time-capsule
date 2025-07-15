import Button from "../../Shared/Button";
import Input from "../../Shared/Input";

const SignUpForm = ({ toggle }) =>{
    return(
    <>
    <h1 className="auth-title">Sign Up</h1>

    <Input name={"firstName"} hint={"John"}/>
    <Input name={"lastName"} hint={"Doe"}/>
    <Input name={"email"} hint={"johnDoe@mail.com"}/>
    <Input name={"password"} hint={"johnP@ssw0rd"}/>
    
    <p className="auth-switch">
        Already have an account?
        <span className="auth-toggle" onClick={toggle}>
            {" "} Login
        </span>
    </p>

    <Button text={"Sign Up"}/>
    </>
    );
};

export default SignUpForm;
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./login.css";
import LaunchNav from "./LaunchNav";

const SignUp = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [confirmPassword, setConfirmedPassword] = useState(undefined);
    const [phoneNumber, setPhoneNumber] = useState(undefined);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validateResponse()){
            const data = {username: userName, password: password, phone: phoneNumber};
            let response = await (await fetch('/api/signUp', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-Type': 'application/json'
                }
              })).text(); 
            console.log(response);
        } else console.log("Invalid Response. Either an input was left blank, password doesn't match confirmed, or phone number was invalid");
    }

    const validateResponse = () => {
        if(!userName || !password || !confirmPassword || !phoneNumber) {
            return false; //If any inputs are blank
        } else if (password !== confirmPassword) {
            return false; //Password doesn't match the confirmed password
        } else if(!isValidPhoneNumber(phoneNumber)){
            return false; //Invalid phonenumber
        }

        return true;
    }

    const isValidPhoneNumber = (phoneNumber) => {
        const regex = /^\d{10}$/;
        return regex.test(phoneNumber);
      }

    return(
        <>
            <LaunchNav/>
            <h1>Sign Up!</h1>
            <div className="loginform">
            
            <form  onSubmit={handleSubmit}>
                    <div className="fields">
                        <input type="text" name="user" placeholder="Create Username" onChange={e => setUserName(e.target.value)}/>
                        <br/>
                        <input type="password" name="pw" placeholder="Create Password" onChange={e => setPassword(e.target.value)}/>
                        <br/>
                        <input type="password" name="pw" placeholder="Confirm Password" onChange={e => setConfirmedPassword(e.target.value)}/>
                        <br/>
                        <input type="number" name="pn" pattern="[0-9]*" placeholder="Phone Number" onChange={e => setPhoneNumber(e.target.value)}/>                        
                    </div>

                    <div className="button-section-login">
                        <button className="button add" type="button" onClick={() => {navigate('/Login')}}>Back To Login</button>
                        <button className="button submit" type="submit">Create Account</button>
                    </div>
            </form>
        </div>
    </>
    )
}

export default SignUp;
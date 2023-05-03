import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import "./login.css";

const Login = () => {
    localStorage.removeItem('user');//Remove logged in user
    
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [validLogin, setValidLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {username: userName, password: password}
        let response = await (await fetch('https://food-scheduler2000.herokuapp.com/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })).text(); 
        console.log(response);

        if (response === 'User found'){
            localStorage.setItem('user', JSON.stringify(userName)); //Save logged in user for API calls
            navigate('/Home');
        } else {
            setValidLogin(false);
        }

    }


    return(
        <>
            
            <h1>Login</h1>
            <div className="loginform">
                
                <form  onSubmit={handleSubmit}>
                    <div className="fields">
                        <input type="text" name="user" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
                        <br/>
                        <input type="password" name="pw" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        
                    </div>

                    <div className="button-section-login">
                        <button className="button add" type="button" onClick={() => {navigate('/SignUp')}}>Create Account</button>
                        <button className="button submit" type="submit">Login</button>
                    </div>
            </form>
        </div>
    </>
    )
}

export default Login;


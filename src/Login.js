import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory  } from "react-router-dom";
import "./Login.css"
import logo1 from "./images/logo1.png";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");

    const login = (event) =>{
        event.preventDefault(); // prevent refresh
        //Logic
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
            //login succesfully,redirect to home page
            history.push("/");
        })
        .catch((e)=> alert(e.message));
    };
    const register = (event) =>{
        event.preventDefault(); // prevent refresh
        //Logic
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //create a user & login
            //login succesfully,redirect to home page
            history.push("/");
        })
        .catch((e)=> alert(e.message));
    };

    return (
        <div className="login">
           <Link to ="/">
               <img className="login_logo" src={logo1} alt=""/>
           </Link>

           <div className="login_container">
               <h1>Sign In</h1>
               <form>
                   <h5>E-maail</h5>
                   <input value={email} onChange ={event => setEmail(event.target.value)} type="email"/>
                   <h5>Password</h5>
                   <input  value={password} onChange ={event => setPassword(event.target.value)} type="password"/>
                   <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
               </form>

               <p>By signing-in you agree to Amazon's Conditions of Use & Sale . Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
               <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
           </div>
        </div>
    )
}

export default Login

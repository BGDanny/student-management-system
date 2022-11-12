import './Login.css'

import {Link} from "react-router-dom";
import { useState } from 'react';
import React from 'react';
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitHandler = (e) => {
        e.preventDefault(); 
        console.log(email,password);
    };
return  (



<div className='MainDiv'>

    <div className ="rect">
  

    <form onSubmit={submitHandler}>
    <h1 className='StudentLoginHeader'>Student Login</h1>

        <label className="UsernameText">Username</label>
        <br/>
        <input
        type = "text"
        className='form-control'
        placeholder="Enter Username" 
        value={email}
        onChange ={(e) => setEmail(e.target.value)}
        ></input>
<br/>
        <label className='PasswordText'>Password</label>
        <br/>
        <input type = "password"
        className='form-control'
        placeholder="Enter Password"
        value={password}
        onChange ={(e) => setPassword(e.target.value)}
        ></input>
<br/>

        <div className='col-md-12 text-center'>
       
        <button className ="btn btn-dark button" type="submit">Sumbit</button>
      
        </div>
        




    
    </form>
    </div>
 
</div>

);
}

export default Login;
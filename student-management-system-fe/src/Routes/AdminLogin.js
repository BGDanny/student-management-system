import './AdminLogin.css'

import {Link} from "react-router-dom";
import {useState} from 'react';
import React from 'react';

function AdminLogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function submitHandler (e) {
        e.preventDefault(); 
        const response = await fetch('http://localhost:5000/api/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                email, password
            }),
        })

        const data = await response.json();

        if(data.found)
        {
            alert("Login Successfull");
            window.location.href = "/adminMainPage";
        }
        else {
            alert("Wrong Email and Password");
        }
        console.log(data);
    };
return  (



<div className='TopDiv'>

    <div className ="BottomDiv">

    <form onSubmit={submitHandler}>
    <h1 className='AdminLoginHeader'>Admin Login</h1>


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
       
        <button className ="btn btn-dark button" type="submit">Submit</button>
      
        </div>
    </form>
    </div>
</div>

);
}

export default AdminLogin;
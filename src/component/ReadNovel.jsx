import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';



const Login = () => {
    // const [userName,setUserName] = useState(null) 
    const [token,setToken] = useState(null)
    async function checkUser () {
        try {
            const t = await axios.get('http://localhost:8000/login',{data:{userName:"job"}})
            console.log(t.data)
            setToken(t.data)
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(()=>{
        console.log(token);
    },[token])

    return (
        <div className="App">
            <br/><br/><br/><br/>
                <input type="text" id="inputUserName" placeholder="User Name"  required/><br/>
                <button onClick={checkUser} >login</button>
        </div>
    );  
}
export default Login;
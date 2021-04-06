import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [userName,setUserName] = useState(null)
    // const [token,setToken] = useState(null)
    const history = useHistory();
    const checkUser = async () => {
        try {
            const tokens = await axios.post('http://localhost:8000/login',{userName:userName})
            if (tokens.data !== null){
                localStorage.setItem("fiction-king-token", tokens.data);
                history.push("/home");
                Location.reload();
                // setToken(tokens)
            }
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(()=>{
        
    },[])

    return (
        <div className="App">
            <br/><br/><br/><br/>
            {/* <form> */}
                <input type="text" onC onChange={(input) => setUserName(input.target.value.trim())} placeholder="User Name" required/><br/>
                {/* <input type="submit" value="login" /> */}
                <button onClick={checkUser} >login</button>
            {/* </form> */}
        </div>
    );  
}
export default Login;
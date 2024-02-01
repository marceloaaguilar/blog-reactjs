import React from "react";
import {Link} from 'react-router-dom'


const Login = () => {

    return (
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit">Login</button>
                <p>Error!</p>
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}


export default Login
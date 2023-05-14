import React from "react";
import "./Login.css";
import { loginUrl } from "./Spotify";

function Login() {
    return (
        <div className="login">
            <img src="https://i.ibb.co/JFpMBcT/Comp-1-0-00-00-00-1.jpg" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
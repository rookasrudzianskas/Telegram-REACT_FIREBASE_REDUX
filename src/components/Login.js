import React from 'react';
import "./styles/Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";

const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__telegram">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png" alt=""/>

                <h1>Telegram</h1>
            </div>

            <Button onClick={signIn}>Sign In To Telegram</Button>
        </div>
    );
};

export default Login;

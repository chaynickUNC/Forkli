import React, { useState } from 'react';
import img from "../beta_logo.png";
import firebase from 'firebase';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function updateEmail(e){
        setEmail({value: e.target.value})
    }

    function updatePassword(e){
        setPassword({value: e.target.value})
    }

    function loginUser(){
        firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(cred =>{
            console.log(cred.user.displayName);
        })
    }

    return (
        <div className="credential_container">
            <div className="sign_up_logo">
                <img src={img} id="sign_up_logo_img" />
                <h1 id="logo_name">Forkli</h1>
            </div>

            <input type="text" placeholder="Email" onChange={updateEmail} className="credential_input"/>
            <input type="text" placeholder="Password" onChange={updatePassword} className="credential_input"/>
            <button type="submit" className="credential_button" onClick={loginUser}>Login</button>

        </div>
    )
}

export default Login

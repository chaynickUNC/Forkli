import React, { useState } from 'react';
import img from "../beta_logo.png";
import firebase from 'firebase';


const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const db = firebase.firestore();

    function updateUsername(e){
        setUsername({value: e.target.value})
    }

    function updateEmail(e){
        setEmail({value: e.target.value})
    }
  
    function updatePassword(e){
        setPassword({value: e.target.value})
    }

    function createUser(){

        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            console.log("account created");
            return userCredential.user.updateProfile({displayName: username.value});
            // return db.collection('users').doc(userCredential.user.uid).set({
            //     id: username.value
            // });
            
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

    }
   

    return (
        <div className='credential_container'>
            <div className="sign_up_logo">
                <img src={img} id="sign_up_logo_img" />
                <h1 id="logo_name">Forkli</h1>
            </div>
            
            <input placeholder="Username" type="text" onChange={updateUsername} className="credential_input" />
            <input placeholder="Email" type="email" onChange={updateEmail} className="credential_input" />
            <input placeholder="Password" type="password" onChange={updatePassword} className="credential_input" />
            <button type="submit" onClick={createUser} className="credential_button" >Sign Up</button>

        </div>
    )
}

export default SignUp

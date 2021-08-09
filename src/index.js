import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyCMy2zcxz4-uiGG3dnyLDiBhviAp9cab1c",
  authDomain: "forkli-8ff97.firebaseapp.com",
  projectId: "forkli-8ff97",
  storageBucket: "forkli-8ff97.appspot.com",
  messagingSenderId: "391641593821",
  appId: "1:391641593821:web:4111f63ee9be7495852834",
  measurementId: "G-LVFYXL9ZDD"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN5vOcgK-Br8BrXNE6zGDDVpNA70VHzRo",
  authDomain: "instabuy-84423.firebaseapp.com",
  projectId: "instabuy-84423",
  storageBucket: "instabuy-84423.appspot.com",
  messagingSenderId: "93925461728",
  appId: "1:93925461728:web:004952a892888098b94a85"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  <App />);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBvEnnweuBwV-FSTYZu_JPffRPwQqCQ82M",
  authDomain: "cart-179df.firebaseapp.com",
  projectId: "cart-179df",
  storageBucket: "cart-179df.appspot.com",
  messagingSenderId: "637289364715",
  appId: "1:637289364715:web:5a1d95a21999abb80c52ae"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


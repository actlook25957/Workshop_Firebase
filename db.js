const firebase = require('firebase');
const config = require('./config/config');
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAkfCRZjBTonFq0z60zLLQ27BvQzpb3ewM",
//   authDomain: "fir-test-9dfa2.firebaseapp.com",
//   projectId: "fir-test-9dfa2",
//   storageBucket: "fir-test-9dfa2.appspot.com",
//   messagingSenderId: "1079584723395",
//   appId: "1:1079584723395:web:28715b54ed9427b7eded76",
//   measurementId: "G-JYHKT9BD4Z"
// };

// Initialize Firebase


const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUB1CdyjPq5kwXvTRLHJFP60RSOtsF84c",
    authDomain: "first-step-landing.firebaseapp.com",
    projectId: "first-step-landing",
    storageBucket: "first-step-landing.appspot.com",
    messagingSenderId: "1060057443990",
    appId: "1:1060057443990:web:5eae4e5f056f79cb905cb7",
    measurementId: "G-3C2S4Z7BXL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

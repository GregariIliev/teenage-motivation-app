// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiVy6zo9xgySVL_k5bi5nVKMCa9pbQkwM",
    authDomain: "teenage-motivation-app.firebaseapp.com",
    projectId: "teenage-motivation-app",
    storageBucket: "teenage-motivation-app.appspot.com",
    messagingSenderId: "357481097255",
    appId: "1:357481097255:web:7d1aa0eaa46a35b4428602",
    measurementId: "G-WXFQZH4CYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
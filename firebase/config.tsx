// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "AIzaSyCiVy6zo9xgySVL_k5bi5nVKMCa9pbQkwM",
    // authDomain: "teenage-motivation-app.firebaseapp.com",
    // projectId: "teenage-motivation-app",
    // storageBucket: "teenage-motivation-app.appspot.com",
    // messagingSenderId: "357481097255",
    // appId: "1:357481097255:web:7d1aa0eaa46a35b4428602",
    // measurementId: "G-WXFQZH4CYJ"
    apiKey: "AIzaSyCGO-1LhBRV_XZfUndO6cf5iUgwDHLf3pA",
    authDomain: "teen-app-d6280.firebaseapp.com",
    projectId: "teen-app-d6280",
    storageBucket: "teen-app-d6280.appspot.com",
    messagingSenderId: "1080274298680",
    appId: "1:1080274298680:web:9cd515820df2c835b983cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
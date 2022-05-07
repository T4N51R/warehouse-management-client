// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjRhR62BqzG_tpz2YxtN8oK79IfYKyzCk",
    authDomain: "warehouse-manage-dcde4.firebaseapp.com",
    projectId: "warehouse-manage-dcde4",
    storageBucket: "warehouse-manage-dcde4.appspot.com",
    messagingSenderId: "168970491630",
    appId: "1:168970491630:web:c96ee13d509fe6c2a205ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
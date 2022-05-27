// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdO0f6x-GiDm_nXeX-C_tmOpfThma5wAU",
    authDomain: "get-me-gaming.firebaseapp.com",
    projectId: "get-me-gaming",
    storageBucket: "get-me-gaming.appspot.com",
    messagingSenderId: "895439006037",
    appId: "1:895439006037:web:39363fc38d94d6602467dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirebStoreApp() {
    return app;
}
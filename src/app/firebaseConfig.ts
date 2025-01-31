// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For Authentication
// Add more imports if you need other Firebase services like Firestore or Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl5vNNvOeVeMIpFHAxL4zRiLOIFW4FXSQ",
  authDomain: "e-commerce-website-911de.firebaseapp.com",
  projectId: "e-commerce-website-911de",
  storageBucket: "e-commerce-website-911de.appspot.com",
  messagingSenderId: "446213258574",
  appId: "1:446213258574:web:7cda836ae2aa5af63ef21f",
  measurementId: "G-PMJQCS5PCT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // For authentication
// Add more service initializations here, if needed

// Export initialized services
export { app, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB13mIo5vxq7GfjCZvixZ6a64kYmwsaPXI",
  authDomain: "netflix-clone-58b40.firebaseapp.com",
  projectId: "netflix-clone-58b40",
  storageBucket: "netflix-clone-58b40.appspot.com",
  messagingSenderId: "331644073392",
  appId: "1:331644073392:web:d040b6ab10dadbd6e51275",
  measurementId: "G-N0DXEJ16ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
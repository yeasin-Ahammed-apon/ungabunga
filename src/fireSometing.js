// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANbUMXNO_Ndpr4upME4tHsgAUJ8Ej7PWs",
  authDomain: "simpleusercollection.firebaseapp.com",
  projectId: "simpleusercollection",
  storageBucket: "simpleusercollection.appspot.com",
  messagingSenderId: "294078093335",
  appId: "1:294078093335:web:accbb79ebf8b8661776452",
  measurementId: "G-1NE88TH0TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

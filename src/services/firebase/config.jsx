// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-J-odeo2Go8dJFzsnpzIWv7Ww1T1WmyQ",
  authDomain: "event-easier-client.firebaseapp.com",
  projectId: "event-easier-client",
  storageBucket: "event-easier-client.appspot.com",
  messagingSenderId: "1072957956683",
  appId: "1:1072957956683:web:70588cc4339dea6b76e3ce",
  measurementId: "G-BEFY113VJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }
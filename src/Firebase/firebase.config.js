// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// AIzaSyBBHpOHNLxQRsOoB0E3snm3PA_qhswjFsQ
// AIzaSyBBHpOHNLxQRsOoB0E3snm3PA_qhswjFsQ
// AIzaSyBBHpOHNLxQRsOoB0E3snm3PA_qhswjFsQ
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBuck,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
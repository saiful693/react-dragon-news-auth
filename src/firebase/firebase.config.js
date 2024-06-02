// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa0x7T-qBOyvNwjLAT-zC-VQWbKPIMMD8",
  authDomain: "react-dragon-news-auth-f21bb.firebaseapp.com",
  projectId: "react-dragon-news-auth-f21bb",
  storageBucket: "react-dragon-news-auth-f21bb.appspot.com",
  messagingSenderId: "997869517345",
  appId: "1:997869517345:web:41c1f7c89ef200d86fc160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth=getAuth(app);

export default app;
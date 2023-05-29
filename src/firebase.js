import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHJlepwnB18tRMpF7vx49a-ZdO-Mxd1qU",
  authDomain: "react-firebase-noti-13b74.firebaseapp.com",
  projectId: "react-firebase-noti-13b74",
  storageBucket: "react-firebase-noti-13b74.appspot.com",
  messagingSenderId: "192557674735",
  appId: "1:192557674735:web:c37e339b08def05ea8ab1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export default app;

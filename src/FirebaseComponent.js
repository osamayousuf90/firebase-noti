import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging'; // if you're using Firebase Cloud Messaging

const FirebaseComponent = () => {

  
  useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyBHJlepwnB18tRMpF7vx49a-ZdO-Mxd1qU",
      authDomain: "react-firebase-noti-13b74.firebaseapp.com",
      projectId: "react-firebase-noti-13b74",
      storageBucket: "react-firebase-noti-13b74.appspot.com",
      messagingSenderId: "192557674735",
      appId: "1:192557674735:web:c37e339b08def05ea8ab1a",
    };
    const firebaseApp = initializeApp(firebaseConfig);

    // Get Firebase messaging instance
    const messaging = getMessaging(firebaseApp);

    // Request permission for notifications (if needed)
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Get Instance ID (device token)
        getToken(messaging).then((token) => {
          if (token) {
            console.log('Device Token:', token);
            // Do whatever you need to do with the device token
          } else {
            console.log('No device token available.');
          }
        }).catch((error) => {
          console.error('Error getting device token:', error);
        });
      } else {
        console.log('Notification permission denied.');
      }
    });

    // Handle incoming messages (if needed)
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // Handle the received message
    });

    // Cleanup function
    return () => {
      // Clean up any Firebase resources if needed
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    // Your component JSX
    <div>
      Firebase Component
    </div>
  );
};

export default FirebaseComponent;

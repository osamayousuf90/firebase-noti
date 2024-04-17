import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBHJlepwnB18tRMpF7vx49a-ZdO-Mxd1qU",
    authDomain: "react-firebase-noti-13b74.firebaseapp.com",
    projectId: "react-firebase-noti-13b74",
    storageBucket: "react-firebase-noti-13b74.appspot.com",
    messagingSenderId: "192557674735",
    appId: "1:192557674735:web:c37e339b08def05ea8ab1a",
};

initializeApp(firebaseConfig);

const UserId = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        // Check if user is already signed in
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, [auth]);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.email || 'User'}!</p>
                    <button onClick={handleSignOut}>Sign out</button>
                </div>
            ) : (
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleSignIn}>Sign in</button>
                    {error && <p>{error}</p>}
                </div>
            )}
        </div>
    );
};

export default UserId;

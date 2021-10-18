import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../config/firebaseConfig';


//initialize firebase  authentication
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();

    //google sign 
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
            });
    }
    // sign out 
    const signOutUser = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((err) => {

        });
    }
    //on State Change 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [auth])

    return {
        user,
        signInUsingGoogle,
        signOutUser
    }

};

export default useFirebase;
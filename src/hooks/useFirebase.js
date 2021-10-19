import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from '../config/firebaseConfig';

//initialize firebase  authentication
initializeAuthentication()
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();

  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const handleUserSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  //google sign in
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);

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
    signOutUser,
    handleUserRegister,
    handleUserSignIn

  }

};

export default useFirebase;
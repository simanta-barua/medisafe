import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from '../config/firebaseConfig';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

//initialize firebase  authentication
initializeAuthentication()
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const history = useHistory();
  const googleAuthProvider = new GoogleAuthProvider();

  const handleUserRegister = (email, password, displayName) => {
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then((result) => {
        console.log(result);
        swal("Login In Success", "success");
        history.push('/');

      })
      .catch(err => swal("Something went wrong!", `${err.message}`, "error"));
  };

  const handleUserSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        swal("good job", "success");
        
      })
      .catch(err => swal("Something went wrong!", `${err.message}`, "error"));
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
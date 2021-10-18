import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIRE_APIKEY,
    authDomain:process.env.REACT_APP_FIRE_AUTHDOMAIN,
    projectId:process.env.REACT_APP_FIRE_PROJECTID,
    storageBucket:process.env.REACT_APP_FIRE_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_FIRE_MESSAGINGSENDERID,
    appId:process.env.REACT_APP_FIRE_APPID,

};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;
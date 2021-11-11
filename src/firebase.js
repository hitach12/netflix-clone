import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAEcgrlilZiwXrozu31dm3a1xnp1IiM-VM",
  authDomain: "netflix-clone-9d070.firebaseapp.com",
  projectId: "netflix-clone-9d070",
  storageBucket: "netflix-clone-9d070.appspot.com",
  messagingSenderId: "543271136699",
  appId: "1:543271136699:web:83ca3c11d7c79aba37a89e",
  measurementId: "G-4DYX89M30K"
};
  

// const firebaseApp = 
firebase.initializeApp(firebaseConfig)

var db = firebase.firestore();
var auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {db , auth , provider};
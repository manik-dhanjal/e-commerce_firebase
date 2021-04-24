import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSlmocmTno8EQt4LRlYNeyoDqlhxYsQ9I",
    authDomain: "e-commerce-firebase-9834b.firebaseapp.com",
    projectId: "e-commerce-firebase-9834b",
    storageBucket: "e-commerce-firebase-9834b.appspot.com",
    messagingSenderId: "1007662159320",
    appId: "1:1007662159320:web:ba54af09695d0447944ead",
    measurementId: "G-2SWY4SD385"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //creating a google sign in popup   
  var provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default  auth;

  //creating a firebase database
 export const db = firebase.firestore()

  
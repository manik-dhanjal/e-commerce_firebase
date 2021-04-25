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
  
  firebase.initializeApp(firebaseConfig);


  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

       const userDocRef = firestore.collection("users").doc(userAuth.uid)
       await firestore.runTransaction((transaction)=>{
          return transaction.get(userDocRef).then((userDoc)=>{
            if(!userDoc.exists)
              {
                const { displayName, email } = userAuth;
                const createdAt = new Date();
                transaction.set(userDocRef,{ 
                        displayName,
                        email,
                        createdAt,
                    ...additionalData
                 })
              }
          })
        })
        .catch((e)=>{
          console.log(e)
        })
 
  }
  export  const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;

  
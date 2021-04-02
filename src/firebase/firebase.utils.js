import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5VlDzsT8QbNzJKQXTliie5JrHqg-BUPk",
  authDomain: "crown-db-f4a02.firebaseapp.com",
  projectId: "crown-db-f4a02",
  storageBucket: "crown-db-f4a02.appspot.com",
  messagingSenderId: "555498428644",
  appId: "1:555498428644:web:9c239b1be048ab7e4c74f1",
  measurementId: "G-QH7YPTN260",
};

export const createUserProfileDocuments = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // Add the user to the database if they do not already exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//For google signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

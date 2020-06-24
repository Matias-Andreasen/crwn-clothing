import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvQALYGS7oxzfbFlV7srZKUmhbnecZK6I",
    authDomain: "crwn-db-a0ea1.firebaseapp.com",
    databaseURL: "https://crwn-db-a0ea1.firebaseio.com",
    projectId: "crwn-db-a0ea1",
    storageBucket: "crwn-db-a0ea1.appspot.com",
    messagingSenderId: "645846522935",
    appId: "1:645846522935:web:f13750096f4d22eb4773b2",
    measurementId: "G-XQ2YPTQPQM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

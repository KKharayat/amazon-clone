import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxi3eC9tlU1NWuZ5riUoRnxGi4mo0deMA",
    authDomain: "e-clone-7c20c.firebaseapp.com",
    projectId: "e-clone-7c20c",
    storageBucket: "e-clone-7c20c.appspot.com",
    messagingSenderId: "678054045552",
    appId: "1:678054045552:web:87d69cf3e81e1f4cb811b5",
    measurementId: "G-MGB4EDCPVE"
})

const auth = firebase.auth();

export {auth};
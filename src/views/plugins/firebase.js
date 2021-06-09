import firebase from "firebase/app";
import firebase from "firebase/auth";
import firebase from "firebase/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyC8Gvb921VKgXsZyjRu_1xj7liLiZwEzQA",
    authDomain: "livestock-gps-tracker.firebaseapp.com",
    projectId: "livestock-gps-tracker",
    storageBucket: "livestock-gps-tracker.appspot.com",
    messagingSenderId: "200623598685",
    appId: "1:200623598685:web:982046b3ee6d0154a7b1b4",
    measurementId: "G-2DRNVEVZ2Y"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export {
    auth,
    db
};
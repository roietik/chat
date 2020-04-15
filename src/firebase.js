import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD9ST0dfmCehXtFOSwMWO-Bz3YxC57R2KQ",
  authDomain: "chat-adb94.firebaseapp.com",
  databaseURL: "https://chat-adb94.firebaseio.com",
  projectId: "chat-adb94",
  storageBucket: "chat-adb94.appspot.com",
  messagingSenderId: "446706223198",
  appId: "1:446706223198:web:e6029666b8758e760d8ccf",
  measurementId: "G-B23WETLEWL",
};

// firebase.initializeApp(config);
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const database = firebase.database();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence } from "firebase/auth";
import { AsyncStorage, Platform } from "react-native";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAxx2PqVwG83H4FnJOJ1MWXmn96KwpEpUQ",
  authDomain: "apptest-df7a4.firebaseapp.com",
  projectId: "apptest-df7a4",
  storageBucket: "apptest-df7a4.appspot.com",
  messagingSenderId: "985948639874",
  appId: "1:985948639874:web:7542cc05a9b8649860da9b",
  measurementId: "G-33539ZFVMX",
};
const app = initializeApp(firebaseConfig);
export const authetication = getAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service

// Create a storage reference from our storage service
//export const storageRef = storage.ref();

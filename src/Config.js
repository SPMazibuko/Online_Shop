import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCI-P19yUPu70foeq-WpE8rrVLOn5DUfi0",
  authDomain: "onlineshop-40823.firebaseapp.com",
  projectId: "onlineshop-40823",
  storageBucket: "onlineshop-40823.appspot.com",
  messagingSenderId: "658722117097",
  appId: "1:658722117097:web:d7f3ff5e66524502a7e778",
  measurementId: "G-5M6BMKVW9L"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}
// app/firebase.js
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore }  from 'firebase/firestore';


const firebase = {
  apiKey: "AIzaSyBROGzvQk5VrRlUpa6VxDIQRvAgxAT_0mc",
  authDomain: "orphanconnect-f3540.firebaseapp.com",
  projectId: "orphanconnect-f3540",
  storageBucket: "orphanconnect-f3540.appspot.com",
  messagingSenderId: "335244798305",
  appId: "1:335244798305:web:7902d0c1e89dd851f67d20",
};

// Initialize Firebase 
const app = !getApps().length ? initializeApp(firebase) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db };

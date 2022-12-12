import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDto4zGydjbWm5Ny_Jz0exoqDCYzFLNGJA",
  authDomain: "dvla-98c16.firebaseapp.com",
  projectId: "dvla-98c16",
  storageBucket: "dvla-98c16.appspot.com",
  messagingSenderId: "552010528122",
  appId: "1:552010528122:web:32f2ea92f51b7d25ef92c3"
};

let app;

// Initialize Firebase
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();


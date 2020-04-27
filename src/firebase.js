
// This import loads the firebase namespace along with all its type information.
import firebase from '@firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyDQj8q1tiG4GkmoKDWV7GMHK1RXURnBdhc",
  authDomain: "isf-app-25a43.firebaseapp.com",
  databaseURL: "https://isf-app-25a43.firebaseio.com",
  projectId: "isf-app-25a43",
  storageBucket: "isf-app-25a43.appspot.com",
  messagingSenderId: "267548569565",
  appId: "1:267548569565:web:d5f8b19cf0f280c6fe9034"
};

firebase.initializeApp(config);

window.firebase = firebase;

export default firebase;

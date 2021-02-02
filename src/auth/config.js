import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/*const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCW1V-XomyFj_pfzJg1WVxeVWJB7b7ARZI",
    authDomain: "chat-for-testapp.firebaseapp.com",
    databaseURL: "https://chat-for-testapp.firebaseio.com",
    projectId: "chat-for-testapp",
    storageBucket: "chat-for-testapp.appspot.com",
    messagingSenderId: "285672943459",
    appId: "1:285672943459:web:6942bbd53520a9ccdaed56",
    measurementId: "G-VS992604ML"
})


export default firebaseConfig*/
export const auth = firebase.auth()
export const firestore = firebase.firestore()
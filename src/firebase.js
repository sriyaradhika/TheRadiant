import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import {
    getAuth, createUserWithEmailAndPassword, signOut,
    signInWithEmailAndPassword, onAuthStateChanged,
    GoogleAuthProvider, signInWithPopup
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAbYCd-k7jyLq8ZdPI1grlxOfLzQK7vl68",
    authDomain: "the-radiant.firebaseapp.com",
    projectId: "the-radiant",
    storageBucket: "the-radiant.appspot.com",
    messagingSenderId: "620049031566",
    appId: "1:620049031566:web:8a72edccfd9383567844df"
};

initializeApp(firebaseConfig)

const auth = getAuth()

function initFirebaseAuth() {
    onAuthStateChanged(auth, authStateObserver)
}

function getProfilePicUrl() {
    return auth.currentUser.photoURL || '/images/profile_placeholder.png'
}

function getUserName() {
    return auth.currentUser.displayName
}

function isUserSignedIn() {
    return !!auth.currentUser
  }

function signUpUser() {
    const email1 = email1.value
    const password1 = password1.value

    createUserWithEmailAndPassword(auth, email1, password1)
    .then(() => {

    })
    .catch((err) => {
        console.log(err.message)
    })
}


function signInUser() {
    const email2 = email2.value
    const password2 = password2.value

    signInWithEmailAndPassword(auth, email2, password2)
    .then(() => {
        
    })
    .catch((err) => {
        console.log(err.message)
    })
}



function signOutUser() {
    signOut(auth)
    .catch((err) => {
        console.log(err.message)
    })}


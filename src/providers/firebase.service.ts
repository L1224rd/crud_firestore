import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyChR0AlqslyxJFQbnPdd64ykfLLFgfPQPM",
    authDomain: "starters-84a8d.firebaseapp.com",
    databaseURL: "https://starters-84a8d.firebaseio.com",
    projectId: "starters-84a8d",
    storageBucket: "starters-84a8d.appspot.com",
    messagingSenderId: "1049099707540"
});

export const db = firebase.firestore();
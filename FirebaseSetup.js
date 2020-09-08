import React from 'react';
import App from './App';
import {firebase} from '@react-native-firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCYapME-bCN98k4kZ_q9AkP8b_5rxhn-BQ',
    authDomain: 'kitten-cat.firebaseapp.com',
    databaseURL: 'https://kitten-cat.firebaseio.com',
    projectId: 'kitten-cat',
    storageBucket: 'kitten-cat.appspot.com',
    messagingSenderId: '679946444506',
    appId: '1:679946444506:web:2faca75eaae816b1728fe3',
    measurementId: 'G-1JXSJGQ4F4',
};
// Initialize Firebase
// firebase.analytics();
firebase.initializeApp(firebaseConfig);
function Setup() {
    return <App />;
}

export default Setup;

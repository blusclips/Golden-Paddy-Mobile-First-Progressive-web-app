/** @format */

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDhpaQux1w_TbXRpz8ruJ8q-xRjkTmv4dc',
  authDomain: 'goldenpaddy-c98de.firebaseapp.com',
  databaseURL: 'https://goldenpaddy-c98de.firebaseio.com',
  projectId: 'goldenpaddy-c98de',
  storageBucket: 'goldenpaddy-c98de.appspot.com',
  messagingSenderId: '59332522162',
  appId: '1:59332522162:web:58c2393a953f2c627559ab',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

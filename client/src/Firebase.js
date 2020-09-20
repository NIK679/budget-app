import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBMA-4hgw-z3o7_hQoBj0C52sBN1qenFaM',
  authDomain: 'budget-app-nik679.firebaseapp.com',
  databaseURL: 'https://budget-app-nik679.firebaseio.com',
  projectId: 'budget-app-nik679',
  storageBucket: 'budget-app-nik679.appspot.com',
  messagingSenderId: '1036148540857',
  appId: '1:1036148540857:web:8869e780be10e9c807a268',
});

const db = firebaseApp.firestore();

export { db };

import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDOH-HZqxQs0AMbVFMw4cR_8mglJ2gUUjU',
  authDomain: 'alchemy-lab-965b5.firebaseapp.com',
  databaseURL: 'https://alchemy-lab-965b5.firebaseio.com',
  projectId: 'alchemy-lab-965b5',
  storageBucket: 'alchemy-lab-965b5.appspot.com',
  messagingSenderId: '600524956797'
};

export const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
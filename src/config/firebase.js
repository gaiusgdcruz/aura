import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAAqozkdhRucPwBDleNd6ZgxWEpxU1spuI",
  authDomain: "project-dsc-jcmcsiit.firebaseapp.com",
  databaseURL: "https://project-dsc-jcmcsiit.firebaseio.com",
  projectId: "project-dsc-jcmcsiit",
  storageBucket: "project-dsc-jcmcsiit.appspot.com",
  messagingSenderId: "119695472216",
  appId: "1:119695472216:web:639757c6607ce137edbc2d",
  measurementId: "G-PPKY9GN4N4"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const FirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAV_BGv6Fj_U8tDeazVG65A7QqJdJ1dYyA",
  authDomain: "farm-tech-964fb.firebaseapp.com",
  projectId: "farm-tech-964fb",
  storageBucket: "farm-tech-964fb.appspot.com",
  messagingSenderId: "13999897371",
  appId: "1:13999897371:web:8c3343f943ba502809f1be",
  measurementId: "G-SMK80GG4HK",
});

export const firestore = firebase.firestore(FirebaseApp);
export const analytics = firebase.analytics(FirebaseApp);
analytics.setAnalyticsCollectionEnabled(true);

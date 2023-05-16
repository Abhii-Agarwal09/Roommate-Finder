// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics, logEvent } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCISvHfKmY6TwEReUYTT3invxN73Wq6lQQ",
//     authDomain: "roommate-finder-c1aa3.firebaseapp.com",
//     projectId: "roommate-finder-c1aa3",
//     storageBucket: "roommate-finder-c1aa3.appspot.com",
//     messagingSenderId: "325754318317",
//     appId: "1:325754318317:web:ac74db3258422352388be4",
//     measurementId: "G-QL7QK7315W"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// const analytics = getAnalytics();
// logEvent(analytics, "notification_received");


// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCS9CVDXH88YwW-zQtpZyzqAvzXXOi2Ogk',
  authDomain: 'college-roommate-finder.firebaseapp.com',
  projectId: 'college-roommate-finder',
  storageBucket: 'college-roommate-finder.appspot.com',
  messagingSenderId: '116716645609',
  appId: '1:116716645609:web:d9dc9c0dede4bd7fbb9478',
  measurementId: 'G-6Y3GBLXHNQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDk6L4FOEHdQZfRa3e5W6w92gjHy9IIqu4",
    authDomain: "first-firebase-project-ff0a8.firebaseapp.com",
    projectId: "first-firebase-project-ff0a8",
    storageBucket: "first-firebase-project-ff0a8.appspot.com",
    messagingSenderId: "251522489753",
    appId: "1:251522489753:web:4258e21180e263e376c708",
    databaseURL:"https://first-firebase-project-ff0a8-default-rtdb.firebaseio.com"
};

  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
import { createContext , useContext} from "react";
import React from "react";
import { getDatabase, set, ref } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDk6L4FOEHdQZfRa3e5W6w92gjHy9IIqu4",
  authDomain: "first-firebase-project-ff0a8.firebaseapp.com",
  projectId: "first-firebase-project-ff0a8",
  storageBucket: "first-firebase-project-ff0a8.appspot.com",
  messagingSenderId: "251522489753",
  appId: "1:251522489753:web:4258e21180e263e376c708",
  databaseURL:
    "https://first-firebase-project-ff0a8-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const FirebaseContext = createContext(null);
export const useFirebase =()=> useContext(FirebaseContext);

const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, pasword) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, pasword);
  };
  const putData = (key, data) => {
    set(ref(database, key), data);
  };
  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

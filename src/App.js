// import {getDatabase, ref, set} from 'firebase/database'
import { app } from "./firebase";
import "./App.css";
import { useState,useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth , GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useFirebase } from "./context/firebase";
// import FireStore from "./pages/FireStore";

// const db = getDatabase(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {
  const firebase = useFirebase();
  console.log("Firebase", firebase);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState(null);
  const signUpwithGoogle = ()=>{
    signInWithPopup(auth, googleProvider);
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user);
      }else{
        console.log("You are logged out");
        setUser(null);
      }
    })
  })

  if(user===null){
  return(
    <div>
       <div className="App h-3/4 flex justify-around  gap-24 text-center px-20 py-20 bg-black text-yellow-50 font-extrabold text-2xl m-6">
      <div className="head pt-48 text-4xl text-wrap">
        {" "}
        First Firebase Project{" "}
      </div>

      <div className="text-3xl bg-slate-300 h-3/4 w-1/2 text-black px-5 pt-12 my-12">
        Create User
        <div className="text-2xl mt-8 mb-4 flex flex-col  font-bold text-blue-700 ">
          {/* <SignUp /> */}
          <div className="contain flex flex-col ">
            <label>Email:</label>
            <input
              className="px-2 mx-10"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
            <label>Password:</label>
            <input
              className="px-2 mx-10"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type="password"
              name="password"
              placeholder="Enter your Password"
              required
            />
            <button
              onClick={() => {
                firebase.signupUserWithEmailAndPassword(email, pass);
                firebase.putData("users/" + "GG", { email, pass });
              }}
              className="text-red-500 mt-3"
            >
              Sign Up
            </button>
            <button className="text-xl font-medium text-blue-400 hover:text-blue-500 transition-colors" onClick={signUpwithGoogle}>signIn with Google</button>
          </div>
          <span className="text-green-500">OR</span>
          <p className="text-md font-light text-black">
            <i>Already having Account?</i>
          </p>
          <SignIn />
        </div>
      </div>
    </div>
    </div>
  )
  }
  return (
    <div> 
      <div className="main  min-h-screen py-12 flex flex-col justify-between items-center bg-slate-400 text-xl text-center text-black font-extrabold">
      <h1 className="text-2xl">Hello {user.email}</h1>
            Main block here 
            {/* <FireStore /> */}
          
      <button className="text-xl font-bold bg-black text-white px-2 " onClick={()=> signOut(auth)}>Logout</button>
      </div>

    </div>
  );
}

export default App;

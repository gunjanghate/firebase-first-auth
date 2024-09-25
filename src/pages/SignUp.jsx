import React, { useState } from "react";
// import "../App.css";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, pass).then(value => alert("Success!"));
  };
  return (
    <div>
        <div className="contain flex flex-col ">

    
      <label>Email:</label>
      <input className="w-36"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name="email"
        placeholder="Enter your Email"
        required
      />
      <label>Password:</label>
      <input className="w-36"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
        type="password"
        name="password"
        placeholder="Enter your Password"
        required
        />
      <button onClick={signUp} className="text-red-500 mt-3">Sign Up</button>
    </div>
        </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((value) => console.log("Sign In Success!"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="contain flex flex-col">
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
      <button onClick={signIn} className="text-red-500 mt-3">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;

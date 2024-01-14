import React, { useRef, useState } from "react";
import validate from "../Utils/validate";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [formToggle, setFormToggle] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggglebtwUpIn = () => {
    if (formToggle === true) {
      setFormToggle(false);
    } else {
      setFormToggle(true);
    }
  };
  const validateform = () => {
    //console.log(email.current.value);
    //console.log(password.current.value);
    const validatemessage = validate(
      email.current.value,
      password.current.value,
    );
    //console.log(validatemessage);
    setErrorMessage(validatemessage);
    if (validatemessage) return;

    //if sign up page hai to new user create krdo
    if (!formToggle) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Account already exists");
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Account not found");
        });
    }
  };

  return (
    <div className="">
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute px-14 py-10 bg-black w-4/12 my-36 mx-auto left-0 right-0 rounded-lg bg-opacity-80"
      >
        <div className="font-bold text-white text-3xl py-4 ">
          {formToggle ? "Sign In" : "Sign Up"}{" "}
        </div>
        {!formToggle && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mt-4  w-full rounded-lg font-normal"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 mt-4 w-full rounded-lg font-normal"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mt-4 w-full rounded-lg font-normal"
        />
        <p className="text-red-500 font-bold text-md mt-2">{errorMessage}</p>

        <button
          className="bg-red-600 py-3 my-8 mt-4 w-full rounded-lg text-lg text-white hover:bg-red-700"
          onClick={validateform}
        >
          {formToggle ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggglebtwUpIn}>
          {" "}
          {formToggle
            ? "New to Netflix?Sign up now"
            : "Already Registered?Sign in"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;

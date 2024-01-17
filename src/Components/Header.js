import React from "react";
import { auth } from "../Utils/firebase";
import {signOut} from "firebase/auth"
import 
const Header = () => {
  const signOutToggle = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-20 flex ">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="  w-48 "
      />

      <div className=" pl-[1050px]">
        <button className="font-bold text-red-500 " onClick={signOutToggle}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;

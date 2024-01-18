import React from "react";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const signOutToggle = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-20 flex w-full justify-between ">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="  w-48 "
      />

      {user && (
        <div className=" ">
          <img
            src={user.photoURL}
            alt="profile-logo"
            className="w-12 h-12 rounded-full"
          />
          <button className="font-bold text-red-500 " onClick={signOutToggle}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

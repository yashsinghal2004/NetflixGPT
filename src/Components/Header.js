import React from "react";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { ChangeSearchState } from "../Utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOutToggle = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const SearchClickOrNot = () => {
    dispatch(ChangeSearchState());
  };

  return (
    <div className="absolute px-4 bg-gradient-to-b from-black z-50 flex w-full justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="  w-40 "
      />
      {user && (
        <div className="">
          <div className=" mt-3 flex ">
            <button
              className="bg-red-600 mr-6 rounded-lg p-2 text-white"
              onClick={SearchClickOrNot}
            >
              GptSearch
            </button>

            <img
              src={user.photoURL}
              alt="profile-logo"
              className="w-12 h-12 rounded-full mr-4"
            />
          </div>
          <button
            className="font-bold text-red-500 ml-[60%]"
            onClick={signOutToggle}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

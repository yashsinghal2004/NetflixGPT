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
import { SUPPORTED_LANG } from "../Utils/constants";
import { ChangeLanguage } from "../Utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Searchgpt = useSelector((store) => store.gpt.Searchgpt);

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

  const Changelanguageinstore = (event) => {
    dispatch(ChangeLanguage(event.target.value));
  };

  return (
    <div className="absolute px-4 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row w-full justify-between  ">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="  w-40 mx-auto md:mx-0"
      />
      {user && (
        <div className="">
          <div className="  flex justify-between">
            {Searchgpt && (
              <select
                className="bg-black text-white m-2  "
                onChange={Changelanguageinstore}
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className=" rounded-lg p-2 text-white hover:bg-opacity-10 bg-gradient-to-b from-black"
              onClick={SearchClickOrNot}
            >
              {Searchgpt ? "Home" : "GptSearch"}
            </button>

            <img
              src={user.photoURL}
              alt="profile-logo"
              className="w-12 h-12 rounded-full justify-between"
            />
          </div>
          <button
            className="font-bold text-red-500 bg-black ml-[80%] md:ml-52"
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

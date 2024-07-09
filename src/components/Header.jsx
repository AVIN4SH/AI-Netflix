import React, { useEffect } from "react";
import WideLogo from "../assets/WideLogo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserIcon from "../assets/UserIcon.png";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  //this will execute everytime state of auth changes like: on signUp, onSignIn, Logout.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //logic to unsubscribe from this functionality of onAuthStateChanged when component unmounts.
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-[99vw] px-4 sm:px-8 md:px-16 py-2 bg-gradient-to-b from-black flex justify-between items-center z-30">
      <img
        src={WideLogo}
        alt="logo"
        className="w-24 ml-6  sm:w-32 md:w-36 lg:w-44 xl:w-48 2xl:w-52 p-2 sm:p-3 md:p-4"
      />
      {user && (
        <div className="flex items-center">
          <div className="flex items-center text-center">
            <button className="bg-transparent px-4 py-1 m-2 rounded text-white transition-transform flex items-center">
              <img
                className="w-8 mx-2 hover:scale-105 bg-white rounded-full transition-transform"
                src={UserIcon}
                alt="user icon"
              />
              <span className="hidden sm:inline">{user.displayName}</span>
            </button>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-red-600 px-4 py-1 m-2 rounded text-white hover:scale-105 transition-transform"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

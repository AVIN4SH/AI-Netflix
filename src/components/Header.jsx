import React from "react";
import WideLogo from "../assets/WideLogo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-16 mx-2 py-2 bg-gradient-to-b flex  justify-between from-black">
      <img
        src={WideLogo}
        alt="logo"
        className="w-24 sm:w-32 md:w-36 lg:w-44 xl:w-48 2xl:w-52 p-2 sm:p-3 md:p-4"
      />
      {user && (
        <div>
          <button
            onClick={handleSignOut}
            className="bg-[#f00] px-4 py-1 m-2 rounded text-white hover:scale-105 transition-transform "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

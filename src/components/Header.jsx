import React from "react";
import NETFLIXLOGO from "../assets/NetflixLOGO.png";

const Header = () => {
  return (
    <div className="absolute px-16 mx-2 py-2 bg-gradient-to-b from-black">
      <img src={NETFLIXLOGO} alt="logo" className="w-44 p-3" />
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import Header from "./Header";
import BGBANNER from "../assets/BG-BANNER.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div
      style={{ backgroundImage: `url(${BGBANNER})` }}
      className="bg-cover  bg-center h-[100vh] w-full"
    >
      <Header />
      <div className=" container  mx-auto flex flex-col justify-center items-center text-center h-[90vh]">
        <form className="p-16 rounded lg:mt-20 bg-black/75 w-10/12 sm:w-8/12 md:6/12 lg:w-4/12">
          <h2 className="text-white text-left mx-8 p-2 my-2 text-4xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 m-2 w-[94%] rounded bg-black/45 border  border-[#818181] font-semibold focus:border-2 focus:border-white text-gray-200"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 m-2 w-[94%] rounded bg-black/45 border  border-[#818181] font-semibold focus:border-2 focus:border-white text-gray-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 m-2 w-[94%] rounded bg-black/45 border  border-[#818181] font-semibold focus:border-2 focus:border-white text-gray-200 "
            required
          />
          <button className="px-4 py-2 mx-2 my-4 w-[94%] rounded bg-[#f00] hover:scale-105 transition-transform hover:bg-[#f22727] text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {/* Add Below functionality later */}
          {/* <br />
          {isSignInForm && (
            <a className="my-4 mx-2 text-white font-bold" href="">
              Forgot Password?
            </a>
          )} */}
          <p className="text-white my-3">OR</p>
          <p className="mx-8 p-2 my-2 text-white ">
            {isSignInForm ? "New to Netflix?" : "Already have an Account?"}{" "}
            <span
              className=" font-bold cursor-pointer "
              onClick={toggleSignUpForm}
            >
              {isSignInForm ? "Sign Up Now" : "Sign In"}
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

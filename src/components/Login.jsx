import React, { useState, useRef } from "react";
import Header from "./Header";
import BGBANNER from "../assets/BG-BANNER.jpg";
import { checkValidData } from "../utils/validate.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //we can get value entered in input fields using state variables, but here we use the useRef react hook:
  //to use this hook: first we initialize like this, then we provide ref={variableName} this as attribute in input tag and then this value is an input object from which if we need value we need to see: variableName.current.value
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validating the form data using our custom utility method
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    //Sign In / Sign Up Functionality using Authentication:
    // Watch from 1:57:35
  };

  return (
    <div
      style={{ backgroundImage: `url(${BGBANNER})` }}
      className="bg-cover   bg-center h-[100vh] w-full"
    >
      <Header />
      <div className=" container  mx-auto flex flex-col justify-center items-center text-center h-[90vh]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-16 rounded lg:mt-20 bg-black/75 w-10/12 sm:w-8/12 md:6/12 lg:w-4/12"
        >
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
            ref={email}
            placeholder="Email Address"
            className="p-4 m-2 w-[94%] rounded bg-black/45 border  border-[#818181] font-semibold focus:border-2 focus:border-white text-gray-200"
            required
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-4 m-2 w-[94%] rounded bg-black/45 border  border-[#818181] font-semibold focus:border-2 focus:border-white text-gray-200 "
            required
          />
          <p className="text-sm text-red-500">{errorMessage}</p>
          <button
            className="px-4 py-2 mx-2 my-4 w-[94%] rounded bg-[#f00] hover:scale-105 transition-transform hover:bg-[#f22727] text-white"
            onClick={handleButtonClick}
          >
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
          <p className="mx-4 p-2 my-2 text-white ">
            {isSignInForm ? "New to Netflix?" : "Already have an Account?"}{" "}
            <span
              className=" font-bold cursor-pointer "
              onClick={toggleSignUpForm}
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
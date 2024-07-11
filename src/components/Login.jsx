import React, { useState, useRef } from "react";
import Header from "./Header";
import BGBANNER from "../assets/BG-BANNER.jpg";
import { checkValidData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const [showTestAcc, setShowTestAcc] = useState(false);

  const dispatch = useDispatch();

  //we can get value entered in input fields using state variables, but here we use the useRef react hook:
  //to use this hook: first we initialize like this, then we provide ref={variableName} this as attribute in input tag and then this value is an input object from which if we need value we need to see: variableName.current.value
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validating the form data using our custom utility method
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    //Sign In / Sign Up Functionality using Authentication if there is no error messsage:
    if (message) return;

    //if no message exists then we do sign in / sign up:
    if (!isSignInForm) {
      // sign up:
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              //Profile Updated
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              // console.log(user);
            })
            .catch((error) => {
              //error occured
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //sign in:
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const handleTestAccClick = () => {
    setShowTestAcc(!showTestAcc);
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
              ref={name}
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
          {isSignInForm && (
            <p
              onClick={handleTestAccClick}
              className="text-white/75 border cursor-pointer py-2 rounded my-4 w-[94%] mx-auto"
            >
              <span> TEST ACCOUNT </span>
              {showTestAcc && (
                <>
                  <br />
                  <span> Email: test@gmail.com </span>
                  <br />
                  <span> Password: Password@123</span>
                </>
              )}
            </p>
          )}
          <button
            className="px-4 py-2 mx-2 my-4 w-[94%] rounded bg-[#f00] hover:scale-105 transition-transform hover:bg-[#f22727] text-white"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
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

//Utility function to check validity of data on sign in / sign up page

//below we are using regex expression for validating that input email & password is even valid or not
//these expressions can be found by searching: regex email validation expression & regex password validation expression
//regex comes with a .test() method which takes variable name as argument and returns true if valid and false if invalid
export const checkValidData = (email, password) => {
  const isEmailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (!isEmailValid) {
    return "Invalid Email Address, Please enter a valid email";
  }
  if (!isPasswordValid) {
    return "Invalid Password, Please enter a valid password ";
  }

  return null;
};

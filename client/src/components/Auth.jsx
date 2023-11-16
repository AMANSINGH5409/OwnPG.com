import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { motion } from "framer-motion";
import { signin, signup } from "../actions/authAction";
import { setLogin, setSignup } from "../state/userSlice";
import '../index.css'
import { ToastContainer, toast } from "react-toastify";


const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = ({ visible, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userRed)


  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      let registerPromise = signup(formData, dispatch)

      toast.promise(registerPromise, {
        pending: 'Creating User...',
        success: 'User Created Successfully...',
        error: "Something Went Wrong please try again!!",
      })

      registerPromise.then((data) => {
        const user = data.result;
        const token = data.token;
        dispatch(setSignup({ user, token }));
      })
        .catch((error => {
          console.log(error);
        }))

    } else {
      let loggedInPromise = signin(formData, dispatch);

      console.log("3");

      toast.promise(loggedInPromise, {
        pending: 'Checking...',
        success: `LoggedIn Successfully...`,
        // error: userData.message,
        error: "Invalid Credentials",
      })
      // "Invalid Credentials Check ID/Password"

      
      console.log("Hello");

      loggedInPromise.then((data) => {
        const user = data.result;
        const token = data.token;
        dispatch(setLogin({ user, token }));
      })
        .catch((error) => {
          console.log(error);
        })
      console.log("Hi");
    }
    onClose();
  };

  const googleSuccess = async (res) => {
    const user = jwtDecode(res?.credential);
    const token = res?.credential;
    try {
      dispatch(setLogin({ user, token }))
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try Again Later.");
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  }

  if (!visible) return null;

  return (
    <div
      className={`flex items-center justify-center h-screen bg-white fixed top-0 w-full bg-opacity-30 backdrop-blur-sm z-50`}
      onClick={handleOnClose}
      id="container"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className={`authBox bg-violet-900 w-1/2 h-max flex my-8 items-center flex-col p-12 rounded-xl transition ease-in-out delay-60 relative`}
      >
        <button
          className="px-2 text-2xl text-white bg-red-700 rounded-full absolute top-2 right-2"
          onClick={onClose}
        >X</button>

        <div className="text-3xl text-white font-medium">OwnPG.com</div>

        <p className="text-lg text-white mt-4">
          Login / SignUp to get access to your desired PG & Rooms
          </p>

        <div className="authOption flex justify-between w-3/5 h-16 my-8">
          <p
            className={
              !isSignUp
                ? `text-2xl text-white font-bold flex-1 flex items-center justify-center bg-[#6D00D3] mx-2 rounded-xl cursor-pointer transition ease-in-out delay-120`
                : `text-2xl text-white flex-1 flex items-center justify-center mx-2 rounded-xl cursor-pointer transition ease-in-out delay-120`
            }
            onClick={() => setIsSignUp(false)}
          >
            Login
          </p>
          <div className="w-[2px] bg-white"></div>
          <p
            className={
              isSignUp
                ? `text-2xl text-white font-bold flex-1 flex items-center justify-center bg-[#6D00D3] mx-2 rounded-xl cursor-pointer transition ease-in-out delay-120`
                : `text-2xl text-white flex-1 flex items-center justify-center mx-2 rounded-xl cursor-pointer transition ease-in-out delay-120`
            }
            onClick={() => setIsSignUp(true)}
          >
            SignUp
          </p>
        </div>

        {isSignUp && (
          <input
            name="name"
            type="text"
            onChange={handleChange}
            className="w-3/5 h-16 mb-8 rounded-lg px-8 text-xl text-[#555555]"
            placeholder="Full Name*"
          />
        )}
        <input
          name="email"
          type="text"
          onChange={handleChange}
          className="w-3/5 h-16 mb-8 rounded-lg px-8 text-xl text-[#555555]"
          placeholder="Email ID*"
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          className="w-3/5 h-16 mb-8 rounded-lg px-8 text-xl text-[#555555]"
          placeholder="Password*"
        />
        {isSignUp && (
          <input
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            className="w-3/5 h-16 mb-8 rounded-lg px-8 text-xl text-[#555555]"
            placeholder="Confirm Password*"
          />
        )}

        <div className="mb-8 relative">
          <div>
            <GoogleLogin
              size="large"
              onSuccess={(creadentialResponse) => {
                googleSuccess(creadentialResponse);
                onClose();
              }}
              onError={(error) => {
                googleFailure(error);
              }}
              useOneTap
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-3/5 bg-[#6D00D3] h-12 text-xl hover:scale-110 transition ease-in-out delay-60 text-white font-medium rounded-xl"
        >
          {isSignUp ? "SignUp Now" : "Login Now"}
        </button>
      </motion.div>
    </div>
  );
};

export default Auth;

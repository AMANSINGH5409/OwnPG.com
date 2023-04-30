import React, { useEffect } from "react";
import { useState } from "react";
import { hands, search } from '../assets'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css'
import { useDispatch, useSelector } from "react-redux";
import QuickFilters from "./QuickFilters";
import { setLoggedInUser } from "../state/userSlice";


const Home = () => {
  // states
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userRed)


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userProfile")))
    setToken(JSON.parse(localStorage.getItem("token")))

    dispatch(setLoggedInUser({ user, token }))

  }, [])

  return (
    <div className="h-full">
      <ToastContainer />

      {/* Quotes and Search Bar */}
      <div className="flex flex-col items-center justify-center mt-5 pt-5">
        <img src={hands} alt="hands" className="w-[80px]" />
        <h1 className="text-3xl mt-2 text-h1Color tracking-wider font-bold">Hi, Welcome OwnPG.com</h1>

        <p className="text-center tracking-wider mt-5 text-h1Color text-2xl">Let us be your helping hands <br />
          while searching PG of your choice</p>
      </div>

      {/* Search Area */}

      <div className="relative w-full flex justify-center flex-col gap-5 items-center px-5 my-8">
        <div className="max-w-[900px] w-full relative">
          <input type="text" className="w-full mt-5 font-semibold text-xl text-[#448DE1] p-5 rounded-tl-[25px] rounded-br-[25px] drop-shadow-2xl focus:shadow-md focus:shadow-cyan-700 transition duration-150 focus:outline focus:outline-offset-2 focus:outline-2 outline-[#ffffff]" placeholder="Search here.......  { Area , Type , No. of Rooms }" />
          <img src={search} alt="serach_icon" className="absolute top-8 right-5 w-[40px]" />
        </div>

        {/* Quick Filters */}
        <div className="flex justify-start items-start gap-3 w-full max-w-[900px] mt-2">
          <h1 className="text-[#002B5C] font-semibold text-xl mr-3">Quick Filters :- </h1>
          <div className="border-l border-[#448DE1] border-2 h-[30px] inline-block "></div>

          {/* Filter Component */}
          <div className="w-full max-w-[600px] md:ml-5 ml-2">
            <QuickFilters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

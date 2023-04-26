import React from "react";
import { useState } from "react";
import { hands, search } from '../assets'
import styled from 'styled-components'

import '../index.css'
import { useSelector } from "react-redux";
import QuickFilters from "./QuickFilters";
const Home = () => {
  // states
  const userData = useSelector((state) => state.userRed)

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userProfile"))
  );


  return (
    <div className="h-full">
      {/* Quotes and Search Bar */}
      <div className="flex flex-col items-center justify-center mt-5 pt-5">
        <img src={hands} alt="hands" className="w-[80px]" />
        <h1 className="text-3xl mt-2 text-textColor font-bold">Hi, Welcome OwnPG.com</h1>

        <p className="text-center mt-5 text-textColor text-2xl">Let us be your helping hands <br />
          while searching PG of your choice</p>
      </div>

      {/* Search Area */}

      <div className="relative w-full flex justify-center flex-col gap-5 items-center px-5 my-8">
        <div className="max-w-[800px] w-full relative">
          <input type="text" className="w-full mt-5 font-semibold text-xl text-[#448DE1] p-5 rounded-tl-[25px] rounded-br-[25px] drop-shadow-2xl focus:shadow-lg focus:shadow-cyan-700 transition duration-150 focus:outline focus:outline-offset-2 focus:outline-2 outline-[#ffffff]" placeholder="Search here.......  { Area , Type , No. of Rooms }" />
          <img src={search} alt="serach_icon" className="absolute top-8 right-5 w-[40px]" />
        </div>

        {/* Quick Filters */}
        <div className="flex justify-center items-start gap-3 w-full max-w-[800px] mt-4">
          <h1 className="text-[#002B5C] font-semibold text-xl">Quick Filters :- </h1>
          <div class="border-l border-[#448DE1] border-2 h-[30px] inline-block "></div>

          {/* Filter Component */}
          <div className="w-full max-w-[500px]">
            <QuickFilters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

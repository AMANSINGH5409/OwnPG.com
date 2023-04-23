import React from "react";
import { useState } from "react";
import { hands } from '../assets'
import styled from 'styled-components'

import '../index.css'
import { useSelector } from "react-redux";
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
        <h1 className="text-3xl mt-2 text-[#05386B] font-bold">Hi, Welcome OwnPG.com</h1>

        <p className="text-center mt-5 text-[#05386B] text-2xl">Let us be your helping hands <br />
          while searching PG of your choice</p>
      </div>

    </div>
  );
};

export default Home;

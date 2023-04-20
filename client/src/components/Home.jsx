import React from "react";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userProfile"))
  );

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {user && (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-medium mt-2">Welcome to OwnPG.com</h1>
          <p className="text-lg font-normal mt-2">Happy to have you here!!</p>
          <h1 className="text-2xl font-medium mt-2">{`Hi, ${user.result.name}`}</h1>
          <p className="text-2xl font-medium mt-2">{`Email-Id : ${user.result.email}`}</p>
        </div>
      )}
    </div>
  );
};

export default Home;

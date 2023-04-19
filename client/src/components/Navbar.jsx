import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const menuItems = ["Home", "Guide", "Suggest Me", "My Profile"];
  return (
    <div className="bg-violet-900 h-20 flex items-center justify-between px-8">
      <div className="logo text-white text-3xl font-medium cursor-pointer" onClick={()=>navigate('/')}>
        OwnPG.com
      </div>
      <div className="navItems w-2/5">
        <ul className="flex items-center justify-between">
          {menuItems.map((item) => {
            return (
              <li className="text-xl font-normal text-white cursor-pointer hover:scale-110 hover:font-bold">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="authBtn flex items-center justify-end px-8 py-2 rounded-lg bg-[#6D00D3] hover:scale-110 transition ease-in-out delay-150 cursor-pointer"
        onClick={() => navigate("/auth")}
      >
        <p className="text-white">Authenticate Me</p>
      </div>
    </div>
  );
};

export default Navbar;

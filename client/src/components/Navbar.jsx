import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { LOGOUT } from "../constants/actionType";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const location = useLocation();

  // states
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userProfile"))
  );

  const [isActive, setIsActive] = useState('home');

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    //JWT
    setUser(JSON.parse(localStorage.getItem("userProfile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");

    setUser(null);
  };

  const menuItems = ["Home", "Guide", "Suggest Me", "My Profile"];
  return (
    <div className="fixed top-0 w-full backdrop-blur-sm bg-white/30 h-20 flex items-center justify-between px-8 border-b-2 border-gray-400">
      <div
        className="logo text-[#05386B] text-3xl font-medium cursor-pointer"
        onClick={() => navigate("/")}
      >
        
        OwnPG.com
      </div>
      <div className="navItems w-2/5">
        <ul className="flex items-center justify-between">
          {menuItems.map((item) => {
            return (
              <li className={`text-xl font-normal text-${item.toLowerCase() === isActive ? 'white' : '[#05386B]'} cursor-pointer hover:scale-110 hover:font-bold`}
                onClick={() => {
                  setIsActive(`${item.toLowerCase()}`)
                  navigate(`/${item === 'Home' ? '' : item.toLowerCase()}`);
                }
                }
              >
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
        <p className="text-white">
          {user ? user.result.name : "Authenticate Me"}
        </p>
      </div>
    </div>
  );
};

export default Navbar;

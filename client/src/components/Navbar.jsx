import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setLoggedInUser } from "../state/userSlice";
import { logoutImg, menuClose, menuOpen } from "../assets";
import useMediaQuery from '../hooks/useMediaQuery'

const Navbar = ({ isTopOfPage, setIsActive, isActive, setVisible, setOnCreatePage }) => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userRed)
  const dispatch = useDispatch();
  const location = useLocation();

  // states
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userProfile")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [open, setOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  const navbarBackground = isTopOfPage ? "" : "backdrop-blur-sm bg-white/30 drop-shadow";

  const logout = () => {
    // dispatch({ type: LOGOUT });
    dispatch(setLogout());
    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userProfile")));
    setToken(JSON.parse(localStorage.getItem("token")));
    console.log("Hello");
    console.log(isAboveMediumScreens);
  }, [isAboveMediumScreens]);

  useEffect(() => {
    dispatch(setLoggedInUser({ user, token }));

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    console.log("hi");

  }, []);

  useEffect(() => {

  }, [user, location])

  const menuItems = ["Home", "Explore", "Guide", "Suggest Me", "My Profile"];
  return (
    <div className={`fixed top-0 w-full ${navbarBackground} h-20 flex z-40 items-center justify-between px-8 pb-2`}>
      <div
        className="logo text-h1Color md:text-3xl text-2xl md:font-medium font-semibold cursor-pointer relative"
        onClick={() => {
          navigate("/")
          setOnCreatePage(false)
        }}
      >
        OwnPG.com
      </div>
      {/* Desktop NavBar */}
      {isAboveMediumScreens ?
        <div className="navItems w-2/5">
          <ul className="flex items-center justify-between">
            {menuItems.map((item, index) => {
              return (
                <li className={`text-xl tracking-wider font-bold text-${item.toLowerCase() === isActive ? 'black' : '[#05386B]'} cursor-pointer hover:scale-110 transition-all duration-300 hover:font-bold`}
                  onClick={() => {
                    setIsActive(`${item.toLowerCase().replace(" ", "")}`)
                    setOnCreatePage(false);
                    navigate(`/${item === 'Home' ? '' : item.toLowerCase().replace(" ", "")}`);
                  }
                  }
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        : ''
      }
      {
        isAboveMediumScreens ?
          <div
            className="authBtn flex items-center justify-end px-8 py-2 rounded-lg bg-[#002B5C] hover:scale-105 transition ease-in-out delay-150 cursor-pointer"
            onClick={() => {
              if (userData.user) {
                logout();
              } else {
                setVisible(true);
              }
              // navigate("/auth")
            }}
          >
            <p className="text-white flex gap-3">
              {userData.user ? userData?.user.name : "Login/Sign Up"}

              {/*  show image only when user is logged in */}
              {userData.user ?
                <img src={logoutImg} alt="logout" className="w-[20px]" />
                : ""
              }
            </p>
          </div>
          : ''
      }

      {/* Mobile Navbar */}
      {!isAboveMediumScreens ?
        <div className="w-full flex justify-end items-center">
          {open ? <img src={menuClose} alt="menuClose" onClick={() => setOpen(false)} className="w-[40px]" /> : <img src={menuOpen} alt="menuOpen" onClick={() => setOpen(true)} className="w-[40px]" />}
        </div> : ''}

      {
        open ?
          <div className="w-full flex items-center justify-center bg-white absolute top-[50px] h-screen left-0 z-50">
            <ul className="flex items-center justify-between gap-12 flex-col">
              {menuItems.map((item, index) => {
                return (
                  <li className={`text-3xl tracking-wider font-bold text-${item.toLowerCase() === isActive ? 'black' : '[#05386B]'} cursor-pointer hover:scale-110 transition-all duration-300 hover:font-bold`}
                    onClick={() => {
                      setIsActive(`${item.toLowerCase().replace(" ", "")}`)
                      setOnCreatePage(false);
                      setOpen(false);
                      navigate(`/${item === 'Home' ? '' : item.toLowerCase().replace(" ", "")}`);
                    }
                    }
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          : ''
      }
    </div>

  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import { motion } from 'framer-motion'
import { SplashScreen, Home, AddPg, CreatePg, Profile, Explore, Auth } from './components'
import AuthorizeUser from './reusable/AuthorizeUser';
import { ToastContainer, toast } from 'react-toastify';
import { NavbarNew, AsideNavbar, AddPgNew } from './components';
import { sideicon } from './assetsnew';

const App = () => {
    // states
    const [isLoading, setIsLoading] = useState(true);
    const [collapse, setCollapse] = useState(false);
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const [onCreatePage, setOnCreatePage] = useState(false);

    const animationVariants = {
        start: { scale: 0 },
        end: { scale: 5, opacity: 0 },
    };
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
        setOnCreatePage(false)
        // for scrolling effect
        const handleScroll = () => {
            if (window.scrollY === 0) setIsTopOfPage(true);
            if (window.scrollY !== 0) setIsTopOfPage(false);
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);


    // Functions
    const handleOnclose = () => {
        setVisible(false);
    }

    const handleCollaps = () => {
        setCollapse(prev => !prev)
    }

    return (
        <div className={`h-screen ${isLoading ? "overflow-hidden" : ""}`}>
            {/* {isLoading ?
                <motion.div
                    initial="start"
                    animate="end"
                    variants={animationVariants}
                    transition={{ duration: 3.0 }}
                    className='h-full'
                >
                    <SplashScreen />
                </motion.div>
                : */}
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
                className="h-full">
                <ToastContainer />
                <GoogleOAuthProvider clientId='789920631154-pk8u145cc7a8ss3hn9qkakctaq4es404.apps.googleusercontent.com'>
                    <div className='app h-full relative'>
                        <div className=''>
                            {/* <Navbar isTopOfPage={isTopOfPage} setVisible={setVisible} visible={visible} isActive={isActive} setIsActive={setIsActive} setOnCreatePage={setOnCreatePage} /> */}
                            <NavbarNew />
                        </div>

                        {/* Main Content */}
                        <div className="w-full flex">
                            {/* Aside Nav */}
                            <div className={`${collapse ? 'w-0' : 'w-[18%]'} overflow-hidden p-2 shadow-xl rounded-tr-xl rounded-br-xl duration-200`}
                                style={{ boxShadow: '0px -5px 5px rgba(0,0,0,0.2),0px 5px 5px rgba(0,0,0,0.2)' }}
                            >
                                <AsideNavbar handleCollaps={handleCollaps} collapse={collapse} />
                            </div>
                            <img src={sideicon} alt="sideicon" className={`${!collapse ? 'hidden' : ''} rotate-180 w-[25px] h-[25px] cursor-pointer`} onClick={handleCollaps} />

                            <div className="ml-4 flex-1 ">
                                <Routes>
                                    <Route path='/' exact Component={Home} />
                                    {/* <Route path='/auth' onClose={handleOnclose} visible={visible} exact Component={Auth} /> */}
                                    <Route path='/explore' exact Component={Explore} />
                                    <Route path='/addpg' element={<AuthorizeUser Component={AddPgNew} />} />
                                    <Route path='/profile' element={<AuthorizeUser Component={Profile} />} />
                                </Routes>
                            </div>
                        </div>

                        {/* Show Floating Sign Of AddPG */}

                        {!onCreatePage &&
                            (
                                <div className="fixed z-20 bottom-[50px] right-[50px] w-[70px] h-[70px] bg-blue-700 rounded-full py-2 text-white float-right flex justify-center cursor-pointer hover:rotate-45 duration-500"
                                    onClick={() => {
                                        const token = localStorage.getItem('token');
                                        if (token) {
                                            setOnCreatePage(true)
                                            navigate("/addpg")
                                        } else {
                                            toast.error("Please Login First")
                                        }
                                    }}
                                >
                                    <CreatePg />
                                </div>
                            )
                        }
                    </div>
                    <Auth onClose={handleOnclose} visible={visible} />
                </GoogleOAuthProvider>
            </motion.div>
            {/* } */}
        </div >
    );
}

export default App;
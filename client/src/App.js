import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './components/Home';
import Auth from './components/Auth';
import './index.css'
import SplashScreen from './components/SplashScreen';
import { motion } from 'framer-motion'

const App = () => {
    // states
    const [isLoading, setIsLoading] = useState(true);
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const [isActive, setIsActive] = useState('home');
    const [visible, setVisible] = useState(false);

    const animationVariants = {
        start: { scale: 0 },
        end: { scale: 5, opacity: 0 },
    };
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)

        // for scrolling effect
        const handleScroll = () => {
            if (window.scrollY === 0) setIsTopOfPage(true);
            if (window.scrollY !== 0) setIsTopOfPage(false);
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    const handleOnclose = () => {
        setVisible(false);
    }

    return (
        <div className="h-screen">
            {isLoading ?
                <motion.div
                    initial="start"
                    animate="end"
                    variants={animationVariants}
                    transition={{ duration: 3.0 }}
                    className='h-full '
                >
                    <SplashScreen />
                </motion.div>
                :
                <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0 }}
                    className="h-full">
                    <GoogleOAuthProvider clientId='789920631154-pk8u145cc7a8ss3hn9qkakctaq4es404.apps.googleusercontent.com'>
                        <BrowserRouter>
                            <div className='app h-full'>
                                <div className=''>
                                    <Navbar isTopOfPage={isTopOfPage} setVisible={setVisible} visible={visible} isActive={isActive} setIsActive={setIsActive} />
                                </div>
                                <div className="pt-20">
                                    <Routes>
                                        <Route path='/' exact Component={Home} />
                                        {/* <Route path='/auth' onClose={handleOnclose} visible={visible} exact Component={Auth} /> */}
                                    </Routes>
                                </div>
                            </div>
                        </BrowserRouter>
                        <Auth onClose={handleOnclose} visible={visible} />
                    </GoogleOAuthProvider>
                </motion.div>
            }
        </div>
    );
}

export default App;
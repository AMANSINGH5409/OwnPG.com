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

    const animationVariants = {
        start: { scale: 0 },
        end: { scale: 5, opacity: 0 },
    };
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, []);

    return (
        <div className="h-screen">
            {isLoading ?
                <motion.div
                    initial="start"
                    animate="end"
                    variants={animationVariants}
                    transition={{ duration: 3.0 }}
                    className='h-full'
                >
                    <SplashScreen />
                </motion.div>
                :
                <motion.div
                    initial={{ opacity: 0 , scale : 1}}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0 }}
                    className="h-full">
                    <GoogleOAuthProvider clientId='789920631154-pk8u145cc7a8ss3hn9qkakctaq4es404.apps.googleusercontent.com'>
                        <BrowserRouter>
                            <div className='app h-full'>
                                <div className=''>
                                    <Navbar />
                                </div>
                                <div className="pt-20">
                                    <Routes>
                                        <Route path='/' exact Component={Home} />
                                        <Route path='/auth' exact Component={Auth} />
                                    </Routes>
                                </div>
                            </div>
                        </BrowserRouter>
                    </GoogleOAuthProvider>
                </motion.div>
            }
        </div>
    );
}

export default App;
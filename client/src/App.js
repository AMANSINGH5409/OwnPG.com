import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './components/Home';
import Auth from './components/Auth';

const App = () => {
    return (
        <GoogleOAuthProvider clientId='789920631154-pk8u145cc7a8ss3hn9qkakctaq4es404.apps.googleusercontent.com'> 
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path='/' exact Component={Home} />
                        <Route path='/auth' exact Component={Auth} />
                    </Routes>
                </div>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}

export default App;
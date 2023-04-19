import React from 'react';
import { RouterProvider, createBrowserRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Auth from './components/Auth';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
]);

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' exact Component={Home} />
                    <Route path='/auth' exact Component={Auth} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
import React from 'react';
import {
    Navbar,
    Footer,
    Main,
    AuthProvider,
    SignIn,
    SignUp,
} from './utils/barrelComponents.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/about" element={<Main />} />
                </Routes>
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    );
};
export default App;
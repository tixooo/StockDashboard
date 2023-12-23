/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { Navbar, Footer, Main, AuthProvider} from "./components/barrelComponents.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let App = () => {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Main />} />
                <Route path="/register" element={<Main />} />
                <Route path="/about" element={<Main />} />
            </Routes>
            <Footer/>
        </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
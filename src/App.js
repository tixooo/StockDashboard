import {
  Navbar,
  Footer,
  AuthProvider,
  SignIn,
  SignUp
} from './utils/barrelComponents.js';
import MainView from './Views/MainView.jsx';
// import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<MainView />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};
export default App;

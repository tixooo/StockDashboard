import {
  Navbar,
  Footer,
  SignIn,
  SignUp,
  Profile,
  About
} from './utils/barrelComponents.js';
import { PrivateView, MainView } from './utils/barrelViews.js';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

let App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      const userProfile = JSON.parse(storedProfile);
      if (userProfile.expiry > Date.now()) {
        dispatch({ type: 'LOAD_PROFILE', payload: userProfile });
      } else {
        localStorage.removeItem('userProfile');
      }
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stocks" element={<PrivateView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;

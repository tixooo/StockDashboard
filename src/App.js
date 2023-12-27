import {
  Navbar,
  Footer,
  SignIn,
  SignUp,
  Profile
} from './utils/barrelComponents.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import MainView from './Views/MainView.jsx';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

let App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<MainView />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};
export default App;

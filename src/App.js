/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import Main from "./components/Main/Main.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from 'react-router-dom';
import AuthenticatedRoute from './hoc/AuthenticatedRoute.jsx';
import Landing from './views/Landing/Landing.jsx';
import Login from './views/Login/Login.jsx';
import Signup from './views/Signup/Signup.jsx';
import Error from './views/Error/Error.jsx';
import About from './views/About/About.jsx';
import Home from './views/Home/Home.jsx';



let App = () => {
  return (
    <div className='App'>
      <Navbar></Navbar>
      {/* <Routes>
        <Route path="/" element={<Landing />} /> */}
        {/* {user === null && <Route path="/signup" element={<Signup />} />}
        {user === null && <Route path="/login" element={<Login />} />} */}
        {/* <Route path="home" element={<AuthenticatedRoute><Home /></AuthenticatedRoute>}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes> */}
          <Main></Main>
      </div>
  );
}
export default App;

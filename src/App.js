import React from "react";
import Main from "./Components/Main/Main.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from 'react-router-dom'
import AuthenticatedRoute from './hoc/AuthenticatedRoute'

let App = () => {
  return (
      <div className='App'>
          <Navbar></Navbar>
          <Routes>
              <Route path="/" element={<Landing/>}/>
              {user === null && <Route path="/signup" element={<Signup/>}/>}
              {user === null && <Route path="/login" element={<Login/>}/>}
              <Route path="home" element={<AuthenticatedRoute><Home/></AuthenticatedRoute>}></Route>
              <Route path="about" element={<About/>}></Route>
              <Route path="*" element={<Error/>}></Route>
          </Routes>

          <Main></Main>
      </div>
  );
}
export default App;

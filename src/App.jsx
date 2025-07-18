import "./Styles/utilities.css";
import "./Styles/colors.css";
import "./Styles/index.css";

import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";

import Auth from "./Pages/Authentication";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import createCapsule from "./Pages/CreateCapsule";
import readCapsule from "./Pages/ReadCapsule";

const App = () =>{
return (
  <BrowserRouter>
   <Routes>
    <Route path="/authentication" element={<Auth/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/create-capsule" element={<createCapsule/>}/>
    <Route path="/read-capsule" element={<readCapsule/>}/>
   </Routes>
  </BrowserRouter>
)
};
export default App;

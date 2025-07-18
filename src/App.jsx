import "./Styles/utilities.css";
import "./Styles/colors.css";
import "./Styles/index.css";

import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";

import Auth from "./Pages/Authentication";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";


const App = () =>{
return (
  <BrowserRouter>
  <Routes>
    <Route path="/authentication" element={<Auth/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>
)
};
export default App;

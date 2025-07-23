import "./Styles/utilities.css";
import "./Styles/colors.css";
import "./Styles/index.css";

import { BrowserRouter ,Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Auth from "./Pages/Authentication";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import CreateCapsule from "./Pages/CreateCapsule";
import ReadCapsule from "./Pages/ReadCapsule";
import CapsuleInfo from "./Pages/MessageInfo";


const App = () =>{
return (
  <BrowserRouter>
  <ToastContainer position="top-center" autoClose={1000} hideProgressBar={true}
    newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />  
   <Routes>
    <Route path="/auth" element={<Auth/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/create-capsule" element={<CreateCapsule/>}/>
    <Route path="/capsule-info" element={<CapsuleInfo/>}/>
    <Route path="/read-capsule" element={<ReadCapsule/>}/>
   </Routes>
  </BrowserRouter>
)
};
export default App;

import "./Styles/utilities.css";
import "./Styles/colors.css";
import "./Styles/index.css";

import { BrowserRouter ,Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Auth from "./Pages/Authentication";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import CreateCapsule from "./Pages/CreateCapsule";
import ReadCapsule from "./Pages/ReadCapsule";
import MessageInfo from "./Pages/MessageInfo"; 


const App = () =>{
return (
  <BrowserRouter>
  <ToastContainer position="top-middle" autoClose={3000} hideProgressBar={true}
    newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />  
   <Routes>
    <Route path="/authentication" element={<Auth/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/create-capsule" element={<CreateCapsule/>}/>
    <Route path="/read-capsule" element={<ReadCapsule/>}/>
    <Route path="/message-info" element={<MessageInfo/>}/>
   </Routes>
  </BrowserRouter>
)
};
export default App;

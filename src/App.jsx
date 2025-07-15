import "./Styles/utilities.css";
import "./Styles/colors.css";
import "./Styles/index.css";
import "./Styles/App.css";
import Auth from "./Pages/Authentication"

import { BrowserRouter ,Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import Header from './Components/Shared/Header/index.jsx';
import Footer from './Components/Shared/Footer/index.jsx';
import MessageCard from './Components/MessageCard.jsx';
import ImageCard from './Components/ImageCard.jsx';
import HeroSection from './Components/HeroSection.jsx';
import UserGreeting from './Components/UserGreeting.jsx';

const App = () =>{
return <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path="/authentication" element={<Auth/>}/>
    <Route path="/home" element={<Home/>}>
    </Route>
  </Routes>
  </BrowserRouter>
</div>
};

function App() {
  return( 
    <>
  <Header/>
  <UserGreeting isLoggedIn={true} username="HibaAnadani"/>
  <HeroSection/>
  <ImageCard/>
  <MessageCard/>
  <Footer/>
  </>
)
}

export default App;

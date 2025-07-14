import logo from './logo.svg';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import MessageCard from './Components/MessageCard.jsx';
import ImageCard from './Components/ImageCard.jsx';
import HeroSection from './Components/HeroSection.jsx';
import UserGreeting from './Components/UserGreeting.jsx';

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

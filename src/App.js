import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Heroimage from './components/Heroimage';
import SideBar from './components/SideBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Navbar/>
    <SideBar/>
    <Heroimage/>
    <AboutMe/>
    <Projects/>
    <Footer/>
    </>
  );
}

export default App;

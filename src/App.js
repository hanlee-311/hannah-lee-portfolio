import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Parallax from './components/Heroimage';
import SideBar from './components/SideBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import AboutMeSmall from './components/AboutMeSmall';
import ProjectsSmall from './components/ProjectsSmall';
import Skills from './components/Skills';
import SkillsSmall from './components/SkillsSmall';

function App() {
  return (
    <>
    <Navbar/>
    <SideBar/>
    <Parallax/>
    <AboutMe/>
    <AboutMeSmall/>
    <Skills/>
    <SkillsSmall/>
    <Projects/>
    <ProjectsSmall/>
    <Footer/>
    </>
  );
}

export default App;

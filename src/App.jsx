
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectList from './components/productList/ProjectList';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';
import {useContext} from "react"
import Skills from './components/skills/Skills';


function App() {

  const theme  = useContext(ThemeContext)
  const darkMode  = theme.state.darkMode
  return (
  <div style={{background:darkMode? "linear-gradient(#222,#2F4F4F,#696969)": "linear-gradient(#fff,#F0E68C,#2F4F4F)", color:darkMode && "white"}}>
    
    <Toggle/>
    <Intro />
    <About />
    <Skills/>
    <ProjectList />
    <Contact/>
    </div>);
}

export default App;

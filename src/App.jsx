/* eslint-disable react/no-unescaped-entities */

import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home/home'
import Projects from './Pages/Projects/projects'
import About from './Pages/About/about'
import Toggler from './Components/Toggler/toggler'
import { useEffect, useState } from 'react'

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [clicked, isClicked] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
    isClicked(true);
  }

  useEffect(() => {
    if (clicked === true) {
      localStorage.setItem("darkmode", isDarkTheme);
    }
  }, [isDarkTheme, clicked]);

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : '';
  }, [isDarkTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkmode");
    if (savedTheme === "true") {
      setDarkTheme(true);
    } else if (savedTheme === "false") {
      setDarkTheme(false);
    }
  }, []);


  return (
    <>
      <BrowserRouter>
      <div className='navbar'>
        <div className='navlinks'>
          <Link className = 'navlink' to = '/' >Accueil</Link>
          <Link  className = 'navlink' to = 'projects'>Nos travaux</Link>
          <Link  className = 'navlink' to = 'about'>A propos</Link>
        </div>
        <Toggler isDarkTheme={isDarkTheme} toggleTheme = {toggleTheme}/>
      </div>
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = 'projects/*' element={<Projects/>}/>
          <Route path = 'about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <div className='footer'>
        THP's Project 2023 &copy;
      </div>
    </>
  )
}

export default App
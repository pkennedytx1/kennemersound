import React from 'react'
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Landing from './components/Landing'
import Reel from './components/Reel'
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import ProgressBar from "react-scroll-progress-bar"

import './App.css';

function App() {
  return (
    <div>
        <Logo />
        <Navbar />
          <Landing />
          <Reel id='Reel'/>
          <Projects id='Projects'/>
          <Aboutme id='Aboutme'/>
          <Testimonials id='Testimonials'/>
          <Contact id='Contact'/>
    </div>
  );
}

export default App;

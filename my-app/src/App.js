import React from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Landing from './components/Landing'
import Reel from './components/Reel'
import Projects from './components/Projects'

import './App.css';

function App() {
  return (
    <div>
        <Logo />
        <Navbar />
        <Landing />
        <Reel id='Reel'/>
        <Projects id='Projects'/>
        
    </div>
  );
}

export default App;

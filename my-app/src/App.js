import React from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Landing from './components/Landing'
import Reel from './components/Reel'

import './App.css';

function App() {
  return (
    <div>
        <Logo />
        <Navbar />
        <Landing />
        <Reel id='Reel'/>
    </div>
  );
}

export default App;

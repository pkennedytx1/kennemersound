import React from 'react'
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Landing from './components/Landing'
import Reel from './components/Reel'
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { Waypoint } from 'react-waypoint'

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state={
        reel: 'nav-link',
        projects: 'nav-link',
        aboutme: 'nav-link',
        testimonials: 'nav-link',
        contactme: 'nav-link'
    }
  }

  render() {
    return (
      <div>
          <Logo />
          <Navbar 
            reel={this.state.reel}/>
            <Landing />
            <Waypoint
              onEnter={console.log('entered reel')}
            >
            <Reel id='Reel' />
            </Waypoint>
            <Projects id='Projects'/>
            <Aboutme id='Aboutme'/>
            <Testimonials id='Testimonials'/>
            <Contact id='Contact'/>
      </div>
    );
  }
}

export default App;

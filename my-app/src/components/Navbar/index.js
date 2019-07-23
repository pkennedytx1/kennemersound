import React from 'react';
import { MDBScrollspyBox, MDBScrollspyList, MDBScrollspyListItem, MDBScrollspyText, MDBTabContent } from "mdbreact";
import './style.css';
import ProgressBar from "react-scroll-progress-bar"

class Navbar extends React.Component {
    
    render() {
        return(
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{padding: '20px 0 20px 0'}}>
                <ProgressBar/>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarColor03">
                
                <ul class="nav nav-pills mx-auto" > 
                    <li className="nav-item">
                    <a 
                        style={{color: 'black', fontWeight: 'bold'}} 
                        className="nav-link" href="#Reel"
                    >REEL</a>
                    </li>
                    <li className="nav-item">
                    <a style={{color: 'black', fontWeight: 'bold'}} className="nav-link" href="#!">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                    <a style={{color: 'black', fontWeight: 'bold'}}className="nav-link" href="#!">ABOUT ME</a>
                    </li>
                    <li className="nav-item">
                    <a style={{color: 'black', fontWeight: 'bold'}}className="nav-link" href="#!">TESTIMONIALS</a>
                    </li>
                    <li className="nav-item">
                    <a style={{color: 'black', fontWeight: 'bold'}}className="nav-link" href="#!">CONTACT ME</a>
                    </li>
                </ul>
                
                </div>
                
            </nav>
        )
    }
}

export default Navbar;
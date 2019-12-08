import React from 'react';
import ProgressBar from "react-scroll-progress-bar"
import { Nav, Navbar } from 'react-bootstrap' 
import './style.css';

function NavbarComponent(props) {
    
        return(
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mx-auto' variant="pills" defaultActiveKey="/home">
                        <Nav.Link href="#Reel">REEL</Nav.Link>
                        <Nav.Link eventKey="link-1">PROJECTS</Nav.Link>                      
                        <Nav.Link eventKey="link-2">ABOUT ME</Nav.Link>
                        <Nav.Link eventKey="link-3">TESTIMONIALS</Nav.Link>
                        <Nav.Link eventKey="link-4">CONTACT ME</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
                <ProgressBar bgcolor="#00cc99"/>
            </Navbar>
        )
    
}

export default NavbarComponent;
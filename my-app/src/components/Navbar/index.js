import React from 'react';
import './style.css';

class Navbar extends React.Component {
    render() {
        return(
            <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor03">
                
                <ul class="nav nav-pills mx-auto">
                    <li className="nav-item">
                    <a className="nav-link active" href="#!">Reel<span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#!">Projects</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#!">About Me</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#!">Testamonials</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#!">Contact Me</a>
                    </li>
                </ul>
                
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
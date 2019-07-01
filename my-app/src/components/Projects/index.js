import React from 'react'
import './style.css'

class Projects extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: 'black', height: 'auto'}}>
                <h1 style={{textAlign: 'center', color: 'white', padding: '30px'}}>Projects</h1>
            <div class="container">
                <div class="card-columns">
                    <div class="card">
                        <img class="card-img-top img-fluid" src="images/projects/hope2.jpg" alt="Card image cap"/>
                    </div>
                    <div class="card">
                        <img class="card-img-top img-fluid" src="images/projects/fightingchance.png" alt="Card image cap"/>
                    </div>
                    <div class="card">
                        <img class="card-img img-fluid" src="images/projects/bluesunday.jpg" alt="Card image"/>
                    </div>
                    <div class="card">
                        <img class="card-img img-fluid" src="images/projects/Farsight Dir. Jackson Lowen.png" alt="Card image"/>
                    </div>
                    <div class="card">
                        <img class="card-img img-fluid" src="images/projects/La Loma del Chivo Dir. Alex Winker.png" alt="Card image"/>
                    </div>
                    <div class="card">
                        <img class="card-img img-fluid" src="images/projects/otherblackboysredo.png" alt="Card image"/>
                    </div>
                    <div class="card">
                        <img class="card-img img-fluid" src="images/projects/Mammoth Dir. Justice Gutierrez.png" alt="Card image"/>
                    </div>
                    <div class="card">
                        <img class="card-img img-fluid" src="images/projects/whiskeycom.png" alt="Card image"/>
                    </div>
                    <div class="card">
                        <img class="card-img img-fluid" src="images/projects/LIVE ACTION - The Adventure Zone Fan Film Dir. Curtis McOsker.png" alt="Card image"/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Projects
import React from 'react'
import './style.css'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
        this.toggleHover = this.toggleHover.bind(this)
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {

        let linkStyle;
        let photoStyle;

        if(this.state.hover) {
            linkStyle = {color: 'white', cursor: 'pointer'}
            photoStyle = {transition: '0.5s ease', filter: 'blur(3px)', cursor: 'pointer'}
        } else {
            linkStyle = {opacity: '0'}
            photoStyle = {transition: '0.5s ease'}
        }
        return(
            <div style={{backgroundColor: 'black', height: 'auto'}}>
                <h1 style={{textAlign: 'center', color: 'white', padding: '30px'}}>Projects</h1>
            <div class="container">
                <div class="card-columns">
                    <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} class="card">
                        <img style={photoStyle} class="card-img img-fluid" src="images/projects/hope2.jpg" alt="Card image cap"/>
                        <div style={linkStyle} class="imagetxt">
                            <p class='imagetitle'>Hope 2</p>
                            <p class='linktxt'>Click for Project Details</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Projects
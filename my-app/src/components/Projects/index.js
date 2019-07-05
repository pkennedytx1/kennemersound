import React from 'react'
import Project from './Project'
import projects from './projects.json'
import './style.css'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            open: false,
            projects,
        }
        this.toggleHover = this.toggleHover.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
        this.onOpenModal = this.onOpenModal.bind(this)
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {

        return(
            <div style={{backgroundColor: 'black', height: 'auto'}}>
                <h1 style={{textAlign: 'center', color: 'white', padding: '30px'}}>Projects</h1>
            <div class="container">
                <div class="card-columns">
                    {this.state.projects.map(projects => (
                        <Project 
                            id={projects.id}
                            key={projects.id}
                            title={projects.title}
                            image={projects.image}
                            year={projects.year}
                            director={projects.director}
                            role={projects.role}
                            summary={projects.summary}
                            link={projects.link}
                            href={projects.href}
                        />
                    ))}
                </div>
            </div>
            </div>
        )
    }
}

export default Projects
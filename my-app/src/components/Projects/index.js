import React from 'react'
import Project from './Project'
import Plx from "react-plx"
import projects from './projects.json'
import './style.css'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects
        }
    }

    render() {
        const parallaxData = [
            {
              start: "self",
              startOffset: "10vw",
              end: "self",
              endOffset: "50vh",
              easing: "easeInSine",
              properties: [
                  {
                      startValue: 0.2,
                      endValue: 1,
                      property: "opacity",
                      unit: ""
                    }
                ]
            }
          ];
          

        return(
            <div style={{backgroundColor: 'black', height: 'auto', padding: '70px 0 100px 0'}}>
                <Plx
                parallaxData={parallaxData}
                style={{
            
                }}
              >
                <h1 style={{textAlign: 'center', color: 'white', padding: '30px'}}>Projects</h1>
                </Plx>    
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
import React from 'react'
import styled from 'styled-components'
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal"
import ScrollAnimation from 'react-animate-on-scroll'
import './style.css'

const StyledModal = Modal.styled`
    max-width: 800px;
    display: flex;
    background-color: white;
    opacity: ${props => props.opacity};
    transition: opacity ease 500ms;
`;

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            opacity: 0
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.afterOpen = this.afterOpen.bind(this);
        this.beforeClose = this.beforeClose.bind(this);

    }

    toggleModal(e) {
        this.setState({ isOpen: !this.state.isOpen })
    }

    afterOpen() {
        
        setTimeout(() => {
            this.setState({ opacity: 1 })
        });
    }

    beforeClose() {
        
        return new Promise(resolve => {
            this.setState({ opacity: 0 })
            setTimeout(resolve, 200)
        });
    }

    render() {

        return(
            <div key={this.props.id} onClick={this.toggleModal} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} class="card">
                <div className='borderline'>
                <img style={{}} class="card-img img-fluid" src={`../images/projects/${this.props.image}`} alt="Card image cap"/>
                <div style={{padding: '8px 0 0 20px'}} class="imagetxt">
                    <p class='imagetitle'>{this.props.title}</p>
                    <p class='linktxt'>Click for Project Details</p>
                </div>
                </div>
                
                <ModalProvider backgroundComponent={FadingBackground}>
                    <StyledModal
                        isOpen={this.state.isOpen}
                        afterOpen={this.afterOpen}
                        beforeClose={this.beforeClose}
                        onBackgroundClick={this.toggleModal}
                        onEscapeKeydown={this.toggleModal}
                        opacity={this.state.opacity}
                        backgroundProps={{ opacity: this.state.opacity }}
                    >
                        <div style={{position: 'relative', padding: '15px'}}>
                            <h2>{this.props.title}</h2>
                            <h4>Dir. {this.props.director}</h4>
                            <h5>{this.props.year}</h5>
                            <p>{this.props.summary}</p>
                            <p style={{cursor: "pointer", position: "absolute", top: '0', right: '5px'}} onClick={this.toggleModal}><i class="fas fa-times"></i></p>
                        </div>
                    </StyledModal>
                </ModalProvider>
            </div>
        )
    }
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;


export default Project
import React from 'react'
import Modal from 'react-responsive-modal'
import './style.css'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            open: false
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

        let linkStyle;
        let photoStyle;
        const { open } = this.state;

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
                    <div onClick={this.onOpenModal} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} class="card">
                        <img style={photoStyle} class="card-img img-fluid" src="images/projects/hope2.jpg" alt="Card image cap"/>
                        <div style={linkStyle} class="imagetxt">
                            <p class='imagetitle'>Hope 2</p>
                            <p class='linktxt'>Click for Project Details</p>
                        </div>
                    </div>
                </div>
            </div>
                <Modal open={open} onClose={this.onCloseModal} center> 
                    <h2>Simple centered modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
                    </p>
                </Modal>
            </div>
        )
    }
}

export default Projects
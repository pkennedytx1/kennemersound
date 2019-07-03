import React from 'react'
import Modal from 'react-responsive-modal'

class Project extends React.Component {
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
            <div key={this.props.id} onClick={this.onOpenModal} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} class="card">
                <img style={photoStyle} class="card-img img-fluid" src={`images/projects/${this.props.image}`} alt="Card image cap"/>
                <div style={linkStyle} class="imagetxt">
                    <p class='imagetitle'>{this.props.title}</p>
                    <p class='linktxt'>Click for Project Details</p>
                <Modal open={open} onClose={this.onCloseModal} center> 
                    <h2>{this.props.title}</h2>
                    <p>{this.props.summary}</p>
                </Modal>
                </div>
            </div>
        )
    }
}


export default Project
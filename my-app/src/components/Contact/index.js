import React from 'react'
import * as EmailValidator from 'email-validator'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'form-control',
            email: 'form-control',
            message: 'form-control',
            nameInput: '',
            emailInput: '',
            messageInput: ''
        }
    }

    inputNameChange = e => {
        this.setState({
            nameInput: e.target.value
        })
        if(this.state.nameInput.length > 5) {
            this.setState({
                name: 'form-control is-valid'
            })
        } else {
            this.setState({
                name: 'form-control'
            })
        }
    }

    inputEmailChange = e => {
        this.setState({
            emailInput: e.target.value
        })
        if( this.state.emailInput.length < 2 ) {
            this.setState({
                email: 'form-control'
            })
        } else if( EmailValidator.validate(`${this.state.emailInput}`)) {
            this.setState({
                email: 'form-control is-valid'
            })
        } else {
            this.setState({
                email: 'form-control is-invalid'
            })
        }
    }

    inputMessageChange = e => {
        this.setState({
            messageInput: e.target.value
        })
        if( this.state.messageInput.length > 2 ) {
            this.setState({
                message: 'form-control is-valid'
            })
        } else {
            this.setState({
                message: 'form-control'
            })
        }
    }

    
    render() {
        const areFieldsCorrect = e => {
            if(this.state.name === 'form-control is-valid' && 
            this.state.email === 'form-control is-valid' &&
            this.state.message === 'form-control is-valid') {
                return true;
            } else {
                return false
            }
        }
        return(
            <div>
                <div className='container'>
                    <div style={{position: 'relative', margin: '100px 0 0 0'}} className='contactcard'>
                    <h1 style={{position:'absolute', top: '-68px', left: '-10px', fontWeight: 'bold', fontSize: '75px', zIndex: '2'}}>Lets Get In Touch.</h1>
                        {/* Need a Black and Grey two halfed Card */}
                    <div style={{textAlign: 'center', position: 'absolute', top: '-55px', right: '0', fontSize: '40px'}} className='socialmedia'>
                        <a><i style={{padding: '0 40px 0 0', cursor: 'pointer'}} class="fab fa-linkedin text-success"></i></a>
                        <a><i style={{padding: '0 40px 0 0', cursor: 'pointer'}} class="fab fa-twitter-square text-success"></i></a>
                        <a><i style={{padding: '0 40px 0 0', cursor: 'pointer'}} class="fab fa-facebook-square text-success"></i></a>
                    </div>
                        <div style={{backgroundColor: 'grey', zIndex: '1', width:'50%', top: '0', height: '400px', float: 'left'}} className='contactright'>
                            {/* contact form for email, see personal portfolio */}
                            <div style={{padding: '30px', color: 'white', fontWeight: 'bold', fontSize: '50px', margin: '90px 0 0 0'}} className='lefttext'>
                                <h3>Joseph Kennemer</h3>
                                <h3><a style={{textDecoration: 'none', transition: '0.2s ease'}} href='mailto:josephkennemer@gmail.com'>josephkennemer@gmail.com</a></h3>
                                <div>
                                    <h2 style={{float: 'left'}}>
                                        <a style={{textDecoration: 'none', padding: '10px', transition: '0.2s ease'}} href='sms:12147737945'><i class="fas fa-sms"></i></a>
                                    </h2>
                                    <h2 style={{float: 'left'}}>
                                        <a style={{textDecoration: 'none', padding: '10px', transition: '0.2s ease'}} href='tel:+12147737945'><i class="fas fa-phone-alt"></i></a>
                                    </h2>
                                    <h3 style={{float: 'left'}}><a style={{textDecoration: 'none', transition: '0.2s ease'}} href='tel:+12147737945'>(214) 773-7945</a></h3>
                                </div>
                                <br></br>
                            </div>
                        </div>
                        <form action="https://formspree.io/josephkennemer@gmail.com" method="POST">
                        <div style={{backgroundColor: 'black', width:'50%', zIndex: '1', position: 'relative', height: '400px', float: 'left', margin: '0 0 100px 0'}} className='contactleft'>
                            <h3 style={{color: 'white', fontWeight: 'bold', padding: '20px 30px 10px 30px'}}>Send Me a Message.</h3>
                            <div style={{width: '100%', float: 'right', padding: '0 30px 15px 30px'}} class='form-group'>
                                <input style={{borderRadius: '0', backgroundColor: 'black'}} 
                                type="name" 
                                class={this.state.name} 
                                id="exampleInputName1" 
                                aria-describedby="nameHelp" 
                                placeholder="Enter Name"
                                name='name'
                                value={this.state.nameInput}
                                onChange={this.inputNameChange} />
                            </div>
                            <div style={{width: '100%', float: 'right', padding: '0 30px 15px 30px'}} class="form-group has-successs">
                                <input style={{borderRadius: '0', backgroundColor: 'black'}} 
                                type="email" 
                                class={this.state.email} 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter Email"
                                name='_replyto'
                                value={this.state.emailInput}
                                onChange={this.inputEmailChange} />
                            </div>
                            <div style={{padding: '0 30px 15px 30px'}} class="form-group">
                                <textarea style={{borderRadius: '0', backgroundColor: 'black'}} 
                                class={this.state.message}
                                id="exampleTextarea" 
                                rows="3"
                                placeholder="Enter Message"
                                value={this.state.messageInput}
                                onChange={this.inputMessageChange}></textarea>
                            </div>
                            <div>
                                {areFieldsCorrect() ?
                                <button style={{borderRadius: '0', color: 'white', margin: '0 30px 10px 30px', fontWeight: 'bold'}}
                                type="submit" 
                                class="btn btn-outline-success"
                                value='Send'>Send Message</button>
                                : <button style={{borderRadius: '0', margin: '0 30px 10px 30px', fontWeight: 'bold', border: 'solid 2px #202020'}}
                                type='button'
                                class="btn btn-outline-disabled">Send Message</button>}
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
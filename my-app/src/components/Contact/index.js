import React from 'react'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'form-group',
            email: 'form-group',
            message: 'form-group',
            nameInput: '',
            emailInput: '',
            messageInput: ''
        }
    }

    render() {
        return(
            <div>
                <div className='container'>
                    <div style={{position: 'relative', margin: '100px 0 50px 0'}} className='contactcard'>
                    <h1 style={{position:'absolute', top: '-68px', left: '-10px', fontWeight: 'bold', fontSize: '75px', zIndex: '2'}}>Lets Get In Touch.</h1>
                        {/* Need a Black and Grey two halfed Card */}
                        <div style={{backgroundColor: 'grey', zIndex: '1', width:'50%', top: '0', height: '400px', float: 'left'}} className='contactright'>
                            {/* contact form for email, see personal portfolio */}
                            <div style={{padding: '30px', color: 'white', fontWeight: 'bold', fontSize: '50px'}} className='lefttext'>
                                <h3>Joseph Kennemer</h3>
                                <h3>email</h3>
                                <h3>phone</h3>
                                <div className='socialmedia'>
                                    <a></a>
                                    <a></a>
                                    <a></a>
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundColor: 'black', width:'50%', zIndex: '1', position: 'relative', height: '400px', float: 'left'}} className='contactleft'>
                            <h3 style={{color: 'white', fontWeight: 'bold', padding: '20px 30px 0 30px'}}>Send Me a Message.</h3>
                            <div style={{width: '100%', float: 'right', padding: '30px'}} class="form-group">
                                <input style={{borderRadius: '0', backgroundColor: 'black'}} type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Name" />
                            </div>
                            <div style={{width: '100%', float: 'right', padding: '0 30px 30px 30px'}} class="form-group">
                                <input style={{borderRadius: '0', backgroundColor: 'black'}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
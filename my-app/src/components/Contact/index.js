import React from 'react'

class Contact extends React.Component {
    render() {
        return(
            <div>
                <div className='container'>
                    <div style={{position: 'relative', margin: '100px 0 50px 0'}} className='contactcard'>
                    <h1 style={{position:'absolute', top: '-68px', left: '-10px', fontWeight: 'bold', fontSize: '75px', zIndex: '2'}}>Lets Get In Touch.</h1>
                        {/* Need a Black and Grey two halfed Card */}
                        <div style={{backgroundColor: 'black', zIndex: '0', position: 'relative', height: '400px'}} className='contactleft'>
                            <h1>hello</h1>
                        </div>
                        <div style={{backgroundColor: 'grey', zIndex: '1', width: '50%', position: 'absolute', top: '0', height: '100%'}} className='contactright'>
                            {/* contact form for email, see personal portfolio */}
                            <div style={{padding: '30px', color: 'white', fontWeight: 'bold', fontSize: '50px'}} className='lefttext'>
                                <h5>email</h5>
                                <h5>phone</h5>
                                <div className='socialmedia'>
                                    <a></a>
                                    <a></a>
                                    <a></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
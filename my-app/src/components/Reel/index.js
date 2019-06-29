import React from 'react'
import ReactPlayer from 'react-player';
import './style.css'

class Reel extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            bgColor: 'white'
        }
    }

    render() {
        return(
            <div className='reelcontainer' style={{height: '900px', padding: '30px', backgroundColor: this.state.bgColor}}>
                <h1 id='Reel' className='text-center'>Reel</h1>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url={'https://vimeo.com/279542470'}
                        config={{
                            vimeo: {
                                preload: true
                            }
                        }}
                        width='100%'
                        height='100%'
                        onStart={() => {
                            this.setState({
                                bgColor: 'black'
                            })
                        }}
                        onEnded={() => {
                            this.setState({
                                bgColor: 'white'
                            })
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Reel
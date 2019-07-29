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
            <div className='reelcontainer' style={{margin: 'auto', height: 'auto', padding: '30px', backgroundColor: this.state.bgColor}}>
                <h1 style={{color: 'black', fontWeight: 'bold', padding: '30px 0 60px 0'}} id='Reel' className='text-center'>Reel</h1>
                <div style={{margin: '0 auto 140px auto', maxWidth: '1200px'}} className='player-wrapper'>
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
                        onPause={() => {
                            this.setState({
                                bgColor: 'white'
                            })
                        }}
                        onPlay={() => {
                            this.setState({
                                bgColor: 'black'
                            })
                        }}
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
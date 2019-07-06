import React from 'react'
import './style.css'

class Testimonials extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: 'black'}}>
                <div className='container'>
                    <h1 style={{color: 'white', padding: '30px'}}>Testimonials</h1>
                    <p className='testbox'>
                    “A lot of people see talent and friendliness as a choice to make, but working with Joseph is so easy. He immediately showed an understanding of both the story and emotion of my film and brought ideas to the table that demonstrated that exceedingly well. He takes notes incredibly well, in high spirits, and it felt more like working “with” someone than “at” someone. His enthusiasm for film and his work is infectious and makes you excited about even the tiniest nuances of sound and cinema. Joseph is an absolute pleasure to work with." 
                    <br /><br />
                    -Jackson Lowen
                    <br /><br />
                    </p>
                    <p className='testbox'>
                    "Working with Joseph was a wonderful time. He always brought refreshing, yet fitting ideas into the room. I look forward to collaborating again!" 
                    <br /><br />
                    -Nyles Washington
                    <br /><br />
                    </p>
                    <p className='testbox'>
                    “Joseph Kennemer is the most professional, creative sound designer I've worked with in Austin. He stretches what you think possible and only adds to the narrative. My experience with him has been nothing but delightful!” 
                    <br /><br />
                    --Allison Webster
                    <br /><br />
                    </p>
                </div>
            </div>
        )
    }
}

export default Testimonials
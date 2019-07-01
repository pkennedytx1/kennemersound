import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import "./style.css"

class Landing extends React.Component {
    render() {
        return(
            <div className="text-white" style={{minHeight: '750px', backgroundColor:'black'}}>
                <ScrollAnimation animateOnce={true} duration={3} delay={1100} animateIn="fadeIn">
                    <h1 style={{textAlign: "center"}}><img style={{margin: '40px'}}src="images/J!Logo.png" /></h1>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
                    <h1 style={{textAlign: "center", fontSize: "80px"}}>Sound Design &</h1>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} animateIn="fadeInRight">
                    <h1 style={{textAlign: "center", fontSize: "80px"}}>Re-Recording Mixing</h1>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} duration={3} delay={1100} animateIn="fadeIn">
                    <p style={{textAlign: "center", fontSize: "24px", margin: "30px"}}>Sound is the puppet master of emotion. Lets make your audience <strong>feel</strong> your story.</p>
                </ScrollAnimation>
                <div style={{textAlign: "center", margin: "40px"}}>
                    <ScrollAnimation animateOnce={true} duration={2} delay={1800} style={{display: 'inline-block'}} animateIn="fadeIn">
                        <i style={{fontSize: "30px", margin: "20px"}} class="fab fa-facebook-square"></i>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} duration={2} delay={2100} style={{display: 'inline-block'}} animateIn="fadeIn">
                    <i style={{fontSize: "30px", margin: "20px"}} class="fab fa-twitter-square"></i>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} duration={2} delay={2400} style={{display: 'inline-block'}} animateIn="fadeIn">
                    <i style={{fontSize: "30px", margin: "20px"}} class="fab fa-linkedin"></i>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateOnce={true} animateIn="fadeIn" duration={2} delay={3000}>
                    <div class="scroll-downs">
                        <div class="mousey">
                            <div class="scroller"></div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default Landing
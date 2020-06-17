import React from 'react';
import Kev from '../Images/img3.jpg';

const About = () => {
    return (
        <div className="about" id="about">
            <div className="img-container">
                <img src={Kev} alt="Kevin on hiking trip"/>
            </div>
            <div className="about-text">
                <h4><span className="section-num">01.</span> About Me</h4>
                <p>Hi there! My name is Kevin Garcia. I was born in Los Angeles and was
                raised by a beautiful set of parents who
                immigrated from El Salvador. I recently graduated from the Honors in Psychology Program at California State University
                of Northridge, and am genuinely happy with my life. Despite this, I realize that there is always room for improvement;
                which is why I decided to create this website. My hope is to articulate myself, and my skills, much more honestly than
                I feel a resume would.
                
                A few facts about myself include that I love eating churros at Disneyland, I train my body and mind through Brazilian
                Jiu-Jitsu, and I enjoy photography. All of the photographs on this website (with the exception of the portrait of
                course) were taken by me. I currently work as an administrative assistant at the University of Los Angeles which you
                can read more about in my resume provided below.
                
                Thank you for taking the time to read this short little passage, and please feel free to email me if you have any
                questions. I hope you have a great day, and that when you fall asleep tonight your dreams remind you that you live a
                beautiful life.</p>
            </div>
        </div>
    )
}

export default About;

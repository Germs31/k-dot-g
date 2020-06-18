import React from 'react'
import {BsChevronDoubleDown} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing">
                <div className="landing-text">
                    <h1>
                        <span className="first-letter">K</span>evin
                        <span className="first-letter">G</span>arcia
                    </h1>
                    <div className="landing-btn-container">
                        <button className="linked-btn">
                            <a href="https://www.linkedin.com/in/kdotg/" target="_blank">Linkedin</a>
                        </button> 
                        <button className="linked-btn">
                            <a href="https://drive.google.com/file/d/1hF6cbRrarDyQOFiAAkIixWvTr9KlA-Be/view?usp=sharing" target="_blank">Download Resume</a>
                        </button> 
                    </div>
                </div>
                <div className="landing-img">
                </div>
            </div>
            <Link to="about" smooth={true} duration={1000}>
                <BsChevronDoubleDown className="down-arrow"/>
            </Link>
        </div>
    )
}

export default Landing

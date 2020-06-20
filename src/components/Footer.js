import React from 'react'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/kdotg/" target="_blank">
                <FaLinkedin className="footer-icon"/>
            </a>
            <p>© Kevin Garcia 2020</p>
        </footer>
    )
}

export default Footer

import React, {useState} from 'react';
import {Link} from 'react-scroll';
import { close } from 'fs';

const BurgerNav = () => {
    const [open, setOpen] = useState(false);
    console.log(open)

    const closeNav = () => {
        setOpen(false)
    }
    return (
        <div>
            <div onClick={() => setOpen(!open)} className={open ? "burger open" : "burger"}>
                <div className={open ? "bar half start open" : "bar half start"}/>
                <div className="bar"/>
                <div className={open ? "bar half end open" : "bar half end"}/>
            </div>
            <nav>
                <ul className={open ? "menu open" : "menu"}>
                    <li>
                        <Link onClick={() => closeNav()} to="about" smooth={true} duration={1000}>
                            <span className="link-num">01.</span> 
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => closeNav()} to="faq-section" smooth={true} duration={1000}>
                            <span className="link-num">02.</span> 
                            Fun Fact
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => closeNav()} to="contact" smooth={true} duration={1000}>
                            <span className="link-num">03.</span> 
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>

    )
}

export default BurgerNav;

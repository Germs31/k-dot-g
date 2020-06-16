import React, {useState} from 'react';

const BurgerNav = () => {
    const [open, setOpen] = useState(false);
    console.log(open)
    return (
        <div>
            <div onClick={() => setOpen(!open)} className={open ? "burger open" : "burger"}>
                <div className={open ? "bar half start open" : "bar half start"}/>
                <div className="bar"/>
                <div className={open ? "bar half end open" : "bar half end"}/>
            </div>
            <nav>
                <ul className={open ? "menu open" : "menu"}>
                    <li> <span className="link-num">01.</span> About</li>
                    <li><span className="link-num">02.</span> Fun Fact</li>
                    <li><span className="link-num">03.</span> Contact</li>
                </ul>
            </nav>

        </div>

    )
}

export default BurgerNav;

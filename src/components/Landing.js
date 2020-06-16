import React from 'react'
import {BsChevronDoubleDown} from 'react-icons/bs';

const Landing = () => {
    const changeSec = () => {
        console.log('hey')
    }
    return (
        <div className="landing-container">
            <div className="landing">
                <div className="landing-text">
                    <h1>Kevin Garcia</h1>  
                    <h4>Lorem Ipsum</h4> 
                </div>
                <div className="landing-img">
                </div>
            </div>
            <BsChevronDoubleDown onClick={() => changeSec()} className="down-arrow"/>
        </div>
    )
}

export default Landing

import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h3><span className="contact-num">03.</span>Lets Talk</h3>
            </div>
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea type="text" placeholder="Message..."/>
                </form>
                <div className="form-btn-container">
                    <button className="form-btn">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;

import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h3><span className="contact-num">03.</span>Lets Talk</h3>
            </div>
            <div className="form-container">
                <form>
                    <label>Name:</label>
                    <input type="text" />
                    <label>Email:</label>
                    <input type="text" />
                    <label>Body:</label>
                    <textarea type="text" />
                </form>
                <div className="form-btn-container">
                    <button className="form-btn">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;

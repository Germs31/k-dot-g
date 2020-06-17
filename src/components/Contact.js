import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <div className="form-container">
                <h3><span className="contact-num">03.</span>Lets Talk</h3>
                <form>
                    <label>Title:</label>
                    <input type="text" />
                    <label>Name:</label>
                    <input type="text" />
                    <label>Body:</label>
                    <textarea type="text" />
                </form>
            </div>
        </div>
    )
}

export default Contact;

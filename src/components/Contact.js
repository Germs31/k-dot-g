import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <form>
                <label>Title:</label>
                <input type="text" />
                <label>Name:</label>
                <input type="text" />
                <label>Body:</label>
                <textarea type="text" />
            </form>
        </div>
    )
}

export default Contact;

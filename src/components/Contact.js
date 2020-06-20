import React, {useState} from 'react';
import axios from 'axios'
const Contact = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleOnChange = event => {
        event.persist();
        setInputs(prev => ({
        ...prev,
        [event.target.id]: event.target.value
        }));
    };

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg) => {
        setServerState({
        submitting: false,
        status: { ok, msg }
        });
        if (ok) {
        setInputs({
            name:"",
            email: "",
            message: ""
        });
        }
    };
    const handleOnSubmit = event => {
        event.preventDefault();
        setServerState({ submitting: true });
        axios({
        method: "POST",
        url: "https://formspree.io/kdotgarciadot@gmail.com",
        data: inputs
        })
        .then(r => {
            handleServerResponse(true, "Thanks!");
        })
        .catch(r => {
            handleServerResponse(false, r.response.data.error);
        });
    };
    return (
        <div className="contact">
            <div className="contact-title">
                <h3><span className="contact-num">03.</span>Lets Talk</h3>
            </div>
            <div className="form-container">
                <form onSubmit={handleOnSubmit}>
                    <input id="name" 
                           type="text" 
                           placeholder="Name"
                           name="name"
                           onChange={handleOnChange}
                           value={inputs.name}/>
                    <input id="email" 
                           type="email" 
                           name="email"
                           onChange={handleOnChange}
                           required
                           value={inputs.email}
                           placeholder="Email"/>
                    <textarea id="message" 
                              name="message" 
                              placeholder="Message..."
                              onChange={handleOnChange}
                              value={inputs.message}/>
                <div className="form-btn-container">
                    <button 
                            type="submit" 
                            disabled={serverState.submitting} 
                            className="form-btn">Submit</button>
                    {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                    </p>
                    )}
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;

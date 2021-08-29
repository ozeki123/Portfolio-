import React from 'react';

import './contact.scss';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="home-contents">
            
                <div className="contact-contents">
                    <div className="contact-text">
                        <p>お問い合わせ</p>
                        <h1>Contact</h1>
                        <p>お仕事のご依頼やご相談はご気楽にご連絡ください。</p>
                    </div>
                    <div className="contact-form">
                        <div className="form-field">
                            <p>Your name</p>
                            <input type="text" placeholder="Name *"/>
                        </div>
                        <div className="form-field">
                            <p>Your name</p>
                            <input type="text" placeholder="E-Mail *"/>
                        </div>
                        <div className="form-field-large">
                            <p>Message</p>
                            <input type="text" placeholder="Message *"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
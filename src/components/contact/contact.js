import React from 'react';

import './contact.scss';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="home-contents">
                <div className="contact-contents">
                    <div className="contact-text">
                        <div className="contact-header">
                            <p>お問い合わせ</p>
                            <h1>Contact</h1>
                        </div>
                        <div className="line"></div>
                        <div className="contact-subheader">
                            <p>お仕事のご依頼やご相談は下記野フォームにてご気楽にご連絡ください。</p>
                            <p>ご返事は内容によってはお時間をいただく場合や、</p>
                            <p>回答できない場合がございます。</p>
                            <a href="/">Email Address: andrewozeki@gmail.com</a> 
                        </div>
                        
                        <div className="line"></div>                   
                    </div>
                    <div className="form-bg">
                        <div className="rectangle">
                            <div className="form-container">
                                <div className="contact-form">
                                    <div className="form-field">
                                        <div className="form-title">
                                            <p>Your name</p>
                                            <p>*</p>
                                        </div>
                                        <input type="text" placeholder="例）山田太郎"/>
                                    </div>
                                    <div className="form-field">
                                        <div className="form-title">
                                            <p>Email Address</p>
                                            <p>*</p>
                                        </div>
                                        <input type="text" placeholder="例）mail@gmail.com"/>
                                    </div>
                                    <div className="form-field-large">
                                        <div className="form-title">
                                            <p>Message</p>
                                            <p>*</p>
                                        </div>
                                        <input type="text" placeholder="例）○○について話を聞かせてほしい。"/>
                                    </div>
                                    <div className="contact-button">
                                        <button>送信</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;
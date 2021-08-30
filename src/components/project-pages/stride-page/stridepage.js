import React from 'react'
import './stridepage.scss'

const StridePage = () => {
    return (
            <div className="project-page-container">
                <div className="home-contents">
                    <div className="project-page-contents">
                        <div className="image-section">
                            <img/>
                        </div>
                        <div className="summary-section">
                            <div className="summary-header">
                                <p>Project /  01</p>
                                <h1>Stride & Co</h1>
                                <p>Illustration, UI/UX Design, Web Development</p>
                                <p>2021</p>
                            </div>
                            <div className="project-summary">
                                <div className="project-row"></div>
                                    <h2>Purpose</h2>
                                    <div className="project-text">
                                        <p>高校1年生の時、1年間のホームステイを経験したことがあります。</p>
                                        <p>当時の私には非常に貴重な経験となり、おかげで新しい文化、言語、生活を体験することができました</p>
                                        <br/>
                                        <p>ただ、自分にピッタリのホームステイを選ぶのは非常に困難です。</p>
                                        <p>ホームステイ情報はうまく共有されていないため、不安要素が多く、下手したらとても不愉快なホームス</p>
                                        <p>テイ経験になってしまう恐れもあります。</p>
                                    </div>
                                </div>
                                <div className="project-row">
                                <h2>Concept</h2>
                                    <div className="project-text">
                                        <p>Stride は Airbnb, スペースマーケットなどのレンタルスペースウェブサイトをベースとしてイラスト、</p>
                                        <p>デザイン、開発いたしました。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-url">
                                <a href="/">https://stride.co.jp</a>
                                <a href="/">View project on Github</a>
                            </div>
                        
                        <div className="project-stack">
                            <div className="mobile-screen">
                                <img/>
                            </div>
                            <div className="stack-summary">
                                <h1>Technology Stack</h1>
                                <p>プロジェクトの開発ライフサイクルで使用した技術</p>
                                <div className="design-row">
                                    <h2>Design</h2>
                                    <p>Adobe Illustrator, Adobe Photoshop</p>
                                    <p>Figma</p>
                                </div>
                                <div className="front-row">
                                    <h2>Front end</h2>
                                    <p>HTML/CSS, Typescript</p>
                                    <p>Angular, GSAP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )   
}

export default StridePage
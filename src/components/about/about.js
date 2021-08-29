import React from 'react'
import './about.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    return (
        <div className="about-container">
            <div className="home-contents">
                <div className="about-section">
                    <div className="background-section">
                        <div className="background-header">
                            <h1>Developer <br/>
                            based in Tokyo
                            </h1>
                            <div className="background-title">
                                <p>About me</p>
                                <p>私について</p>
                            </div>                            
                        </div>                        
                        <div className="background-sub">
                            <div>—————</div>
                            <p>フロントエンド開発者</p>
                        </div>
                        <div background-text>
                            <p>アメリカに生まれ育ち、親の仕事の都合で日本に二年、中国に8年住み、大学を機に日本に帰国しました。</p>
                            <p>学問は文系でしたが、大学2年の時初めてプログラミングに触れ、その面白さを知りました。大学の残り</p>
                            <p>2年をかけてプログラミングを独学で勉強し、現在は外資系の会社でフロントエンド開発者として仕事</p>
                            <p>させていただいております。</p>
                        </div>
                    </div>                                        
                </div>
                <div className="about-section">
                    <div className="ability-section">
                        <div className="image-section">
                            <h1>About works!</h1>
                        </div>
                        <div className="text-section">
                            <div className="ability-header">
                                <h1>Illustrate</h1>
                                <h1>Design, Develop</h1>
                            </div>
                            <div className="background-sub">
                                <div>—————</div>
                                <p>フロントエンド開発者</p>
                            </div>
                            <div className="ability-text">
                                <p>アイデアのコンセプトからイラスト、デザイン、開発をすべて最初から</p>
                                <p>最後自分の手でユニークな経験を創ることが私のパッションです。</p>
                            </div>
                            <div className="redirect-work">
                                <p>View projects</p>
                                <div className="circle"></div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="about-section">
                    <div className="skills-section">
                        <div  className="skills-text-section">
                            <div className="text-contents">
                                <h1>My skills</h1>
                                <div className="text-item">
                                    <div className="skills-header">
                                        <div>———</div>
                                        <p>Front End Technologies</p>
                                    </div>
                                    <div className="skills-text">
                                        <div>———</div>
                                        <p>Javascript, Typescript, HTML/CSS, Angular, React</p>
                                    </div>
                                </div>
                                <div className="text-item">
                                    <div className="skills-header">
                                        <div>———</div>
                                        <p>Design Technologies</p>
                                    </div>
                                    <div className="skills-text">
                                        <div>———</div>
                                        <p>Figma, Adobe Illustrator, Adobe Photoshop, Adobe After Effects</p>
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

export default About;
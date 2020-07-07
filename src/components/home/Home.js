import React from 'react';
import {
    workFromHomeImg, howItWorksImg1, howItWorksImg2, howItWorksImg3, hire,
    talent, leading, level, management, needs, clogo1, clogo2, clogo3, clogo4, clogo5,
    clogo6, clogo7, clogo8, clogo9, clogo10, clogo11, clogo12, clogo13, clogo14, clogo15,
    IconQuote, skill1, skill2, skill3, skill4, skill6, skill7, skill8, learnGrow1, learnGrow2, learnGrow3, idea, vremoteLogo,
} from './logo';

const Home = () => {

    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container">
                    <div className="logo float-left">
                        <a href="#intro" className="scrollto"><img src={vremoteLogo} alt="" className="img-fluid" /></a>
                    </div>
                    <nav className="main-nav float-right d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="#intro">Home</a></li>
                            <li><a href="#about">CTO</a></li>
                            <li className="drop-down"><a>Developer</a></li>
                            <li><a href="#services">Designer</a></li>
                            <li><a href="#portfolio">Blog</a></li>
                            <li><a href="#team">Team</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/*==========================
      Intro Section
    ============================*/}
            <section id="intro" className="clearfix">
                <div className="container">
                    <div className="intro-img">
                        <img src={workFromHomeImg} alt="" className="img-fluid" />
                    </div>
                    <div className="intro-info">
                        <h2>Are you a freelancer or an "<br />agency? Find work in minutes!</h2>
                        <p>Get hired easily by hot companies and startups<br /> from all over the world,</p>
                        <div>
                            <a className="join-as scrollto">
                                JOIN AS A TALENT<i className="fa fa-arrow-right" /></a>
                        </div>
                    </div>
                </div>
            </section>{/* #intro */}
            {/*==========================
      Agencies Effortlessly section
    ============================*/}
            <div className="agencies-effortlessly">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="second-heading">Hire the world-class freelancers and agencies effortlessly.</h3>
                        </div>
                    </div>
                    <div className="row effortlessly-row">
                        <div className="col-md-4 text-center effortlessly-column">
                            <p className="class-no">1</p>
                            <h5 className="class-no-heading">Talk to an expert</h5>
                            <p className="class-no-text">One of our industry experts will work with you to understand your requirements, business goals, and preferences.</p>
                        </div>
                        <div className="col-md-4  text-center effortlessly-column">
                            <p className="class-no">2</p>
                            <h5 className="class-no-heading">Get introduced to the right talent</h5>
                            <p className="class-no-text">We will help you find the right candidate within a few days. 24 hours is the average time we take.</p>
                        </div>
                        <div className="col-md-4 text-center effortlessly-column">
                            <p className="class-no">3</p>
                            <h5 className="class-no-heading">Hire on a trial basis</h5>
                            <p className="class-no-text">Work with your new talent on a trial basis. Pay only if you're fully satisfied.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*==========================
      Build great teams effortlessly
    ============================*/}
            <div className="build-great">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="second-heading">Build great teams effortlessly</h3>
                            <p className="second-heading-text">Work with remote developers as you need them, from full-time remote<br /> engineering teams to hourly contractors.</p>
                        </div>
                    </div>
                    <div className="row build-great-row">
                        <div className="col-md-4">
                            <div className="build-great-column">
                                <img src={hire} />
                                <h5 className="class-no-heading">Hire on a trial basis</h5>
                                <p className="class-no-text">Work with your new talent on a trial basis. Pay only if you're fully satisfied.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="build-great-column">
                                <img src={talent} />
                                <h5 className="class-no-heading">Most reliable remote workers</h5>
                                <p className="class-no-text">On this platform, you will get the best classified talent for your business requirements. Every freelancer is reliable.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="build-great-column">
                                <img src={leading} />
                                <h5 className="class-no-heading">Modern and advanced skills</h5>
                                <p className="class-no-text">The remote workers on Virtual Remote possess the most advanced and modern skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row build-great-sec-row">
                        <div className="col-md-4">
                            <div className="build-great-column">
                                <img src={level} />
                                <h5 className="class-no-heading">Highly professional freelancers</h5>
                                <p className="class-no-text">The freelancers on VirtualRemote are highly professional with excellent communication skills. It's easy to work with them.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="build-great-column">
                                <img src={management} />
                                <h5 className="class-no-heading">Smart project management</h5>
                                <p className="class-no-text">With smart project management, your project will get completed in a very systematic manner.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="build-great-column">
                                <img src={needs} />
                                <h5 className="class-no-heading">Fulfill all of your requirements</h5>
                                <p className="class-no-text">On VRemote, you will find freelancers with different skills. So you can easily fulfill all your business needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==========================
     How VRemote works Section
    ============================*/}
            <div className="how-vremote">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="second-heading">How VRemote works</h3>
                        </div>
                    </div>
                    <div className="row how-vremote-row">
                        <div className="col-md-6">
                            <div className="how-vremote-left text-right">
                                <img className="how-vremote-img" src={howItWorksImg1} />
                            </div>
                        </div>
                        <div className="col-md-6 padd-right-side">
                            <div className="how-vremote-right text-left middle-text">
                                <p className="class-no">1</p>
                                <h5 className="class-no-heading">Fulfill all of your requirements</h5>
                                <p className="class-no-text">On VRemote, you will find freelancers with different skills. So you can easily fulfill all your business needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row how-vremote-row">
                        <div className="col-md-6 padd-left-side">
                            <div className="how-vremote-left text-right middle-text ">
                                <p className="class-no">2</p>
                                <h5 className="class-no-heading">Fulfill all of your requirements</h5>
                                <p className="class-no-text">On VRemote, you will find freelancers with different skills. So you can easily fulfill all your business needs.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="how-vremote-right text-left">
                                <img className="how-vremote-img" src={howItWorksImg2} />
                            </div>
                        </div>
                    </div>
                    <div className="row how-vremote-row">
                        <div className="col-md-6">
                            <div className="how-vremote-left text-right">
                                <img className="how-vremote-img" src={howItWorksImg3} />
                            </div>
                        </div>
                        <div className="col-md-6 padd-right-side">
                            <div className="how-vremote-right text-left middle-text">
                                <p className="class-no">3</p>
                                <h5 className="class-no-heading">Fulfill all of your requirements</h5>
                                <p className="class-no-text">On VRemote, you will find freelancers with different skills. So you can easily fulfill all your business needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==========================
     Trusted by hundreds of hot startups and great companies Section
    ============================*/}
            <div className="trusted-companies">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="second-heading">Trusted by hundreds of hot startups and great companies.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="company-logo-section">
                            <ul className="company-logo-ul">
                                <li className="company-logo-item"><img src={clogo1} /></li>
                                <li className="company-logo-item"><img src={clogo2} /></li>
                                <li className="company-logo-item"><img src={clogo3} /></li>
                                <li className="company-logo-item"><img src={clogo4} /></li>
                                <li className="company-logo-item"><img src={clogo5} /></li>
                                <li className="company-logo-item"><img src={clogo6} /></li>
                                <li className="company-logo-item"><img src={clogo7} /></li>
                                <li className="company-logo-item"><img src={clogo8} /></li>
                                <li className="company-logo-item"><img src={clogo9} /></li>
                                <li className="company-logo-item"><img src={clogo10} /></li>
                                <li className="company-logo-item"><img src={clogo11} /></li>
                                <li className="company-logo-item"><img src={clogo12} /></li>
                                <li className="company-logo-item"><img src={clogo13} /></li>
                                <li className="company-logo-item"><img src={clogo14} /></li>
                                <li className="company-logo-item"><img src={clogo15} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="build-great-column">
                                <img src={IconQuote} />
                                <p className="class-no-text">“The biggest advantage and benefit of working with VRemote is the tremendous reduction in time spent sourcing quality candidates. We’re able to identify the talent in a matter of days.”</p>
                                <h5 className="class-no-heading">Philip Tsai</h5>
                                <p className="class-no-text">Product Manager at SASA</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="build-great-column">
                                <img src={IconQuote} />
                                <p className="class-no-text">“The biggest advantage and benefit of working with VRemote is the tremendous reduction in time spent sourcing quality candidates. We’re able to identify the talent in a matter of days.”</p>
                                <h5 className="class-no-heading">Philip Tsai</h5>
                                <p className="class-no-text">Product Manager at SASA</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="build-great-column">
                                <img src={IconQuote} />
                                <p className="class-no-text">“The biggest advantage and benefit of working with VRemote is the tremendous reduction in time spent sourcing quality candidates. We’re able to identify the talent in a matter of days.”</p>
                                <h5 className="class-no-heading">Philip Tsai</h5>
                                <p className="class-no-text">Product Manager at SASA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==========================
     Hire a great freelancer today! Section
    ============================*/}
            <div className="great-freelancer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="second-heading">Hire a great freelancer today!</h3>
                            <p className="second-heading-text">On VRemote, you will find a large number of business, technology, and design talent<br /> who can help take your business to the next level.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-right">
                            <div className="call-btn">
                                <a className="call-buttn scrollto"><i className="fa fa-phone" />Schedule a call</a>
                            </div>
                        </div>
                        <div className="col-md-6 text-left">
                            <div className="talent-btn">
                                <a className="talent-buttn scrollto">JOIN AS A TALENT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==========================
     Find work that you are passionate about Section
    ============================*/}
            <div className="find-work">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="second-heading">Find work that you are passionate about</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="skill-section">
                                <ul className="skill-ul">
                                    <li className="skill-item"><img src={skill8} /><p className="skill-txt">CTO</p><a >Learn <i className="fa fa-angle-right" />
                                    </a></li>
                                    <li className="skill-item"><img src={skill1} /><p className="skill-txt">Ruby on Rails Learn</p><a >Learn <i className="fa fa-angle-right" />
                                    </a></li>
                                    <li className="skill-item"><img src={skill2} /><p className="skill-txt">React Native</p><a >Learn <i className="fa fa-angle-right" />
                                    </a></li>
                                    <li className="skill-item"><img src={skill6} /><p className="skill-txt">React</p><a >Learn <i className="fa fa-angle-right" />
                                    </a></li>
                                    <li className="skill-item"><img src={skill3} /><p className="skill-txt">Wordpress</p><a >Learn <i className="fa fa-angle-right" />
                                    </a></li>
                                    <li className="skill-item"><img src={skill4} /><p className="skill-txt">Designer</p><a >Learn <i className="fa fa-angle-right" />
                                    </a></li>
                                    <li className="skill-item"><img src={skill7} /><p className="skill-txt">Frontend Developer</p><a >Learn <i className="fa fa-angle-right" />
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==========================
     Learn and grow Section
    ============================*/}
            <div className="learn-grow">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="second-heading">Learn and grow</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="learn-grow-column">
                                <img src={learnGrow1} />
                                <div className="learn-grow-small">
                                    <a className="class-no-link">DESIGN</a>
                                    <h5 className="class-no-heading">The World Is Our Interface - the Evolution of UI Design</h5>
                                    <p className="class-no-text">Today computers are omnipresent. You can’t escape them. We are living in an exciting age of design and evolving user interfaces..</p>
                                    <div className="left-txt text-left">1 week ago</div>
                                    <div className="right-txt text-right"><a >CONTINUE READING<i className="fa fa-long-arrow-right" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="learn-grow-column">
                                <img src={learnGrow2} />
                                <div className="learn-grow-small">
                                    <a className="class-no-link">WEB DEVELOPMENT</a>
                                    <h5 className="class-no-heading">Lighter and Faster - A Guide to the Svelte Framework</h5>
                                    <p className="class-no-text">Web applications are becoming more popular day by day. They’re a growing world which people choose for its simplicity, speed, and cross-platform availability…</p>
                                    <div className="left-txt text-left">2 days ago</div>
                                    <div className="right-txt text-right"><a >CONTINUE READING<i className="fa fa-long-arrow-right" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="learn-grow-column">
                                <img src={learnGrow3} />
                                <div className="learn-grow-small">
                                    <a className="class-no-link">USER EXPERIENCE</a>
                                    <h5 className="class-no-heading">Getting Acquainted – A Guide to User Onboarding Flows</h5>
                                    <p className="class-no-text">With all the effort and money that goes into crafting digital products, two eye-popping stats are especially concerning: three in four apps are opened only...</p>
                                    <div className="left-txt text-left">4 days ago</div>
                                    <div className="right-txt text-right"><a >CONTINUE READING<i className="fa fa-long-arrow-right" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="read-more-btn">Read More <i className="fa fa-long-arrow-right" /></button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid base-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="base">
                                <div className="row">
                                    <div className="col-md-1">
                                        <div className="base-img"><img src={idea} /></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="base-text">
                                            <p className="base-heading-text">Expand your business with us</p>
                                            <h3 className="base-heading">Work with the best companies</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-right">
                                        <div className="base-btn"><button className="base-join-btn">JOIN AS A TALENT <i className="fa fa-long-arrow-right" /></button> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*==========================
      Footer
    ============================*/}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container-fluid footer-side-pading">
                        <div className="row footer-top-row">
                            <div className="col-md-9">
                                <h3 className="footer-top-txt">Highly experienced and professional freelancers and agencies</h3>
                            </div>
                            <div className="col-md-3 text-right">
                                <div className="social-links">
                                    <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
                                    <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
                                    <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Contact</h4>
                                <ul className="contact-list">
                                    <li><i className="fa fa-phone" />0197570530</li>
                                    <li><i className="fa fa-envelope" />hello@vremote.dev</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Hire</h4>
                                <ul className="skill-ul">
                                    <li>Chief Technology Officer</li>
                                    <li>Ruby on Rails </li>
                                    <li>React Native</li>
                                    <li>React</li>
                                    <li>Wordpress</li>
                                    <li>Designer</li>
                                    <li>Frontend Developer</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Start</h4>
                                <ul className="footer-start-list">
                                    <li>Start A Project</li>
                                    <li>Apply As Developer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright-contain">
                    <div className="copyright text-center">
                        Copyright © 2019, VirtualRemote by VirtualSpirit Technology Sdn. Bhd. All Rights Reserved
      </div>
                </div></footer>
        </div>


    )
}

export default Home
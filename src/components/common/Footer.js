import React from 'react';

const Footer = () => {
    return (
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
            </div>
        </footer>
    )
}

export default Footer

import React from 'react';

const Intro = ({ children }) => {

    return (
        <section id="develop_intro" className="clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="develop-intro-info">
                            <p className="first-develop-heading">Apply as a freelance developer</p>
                            <h2 className="main-develop-heading">Join our network of professional<br /> freelancers</h2>
                            <p className="last-develop-heading">On VRemote, you can work with amazing clients and grow your<br /> freelance business.</p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;

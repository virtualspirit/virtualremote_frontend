import React from 'react';

const Intro = ({ children }) => {

    return (
        <section id="develop_intro" className="clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="develop-intro-info">
                            <p className="first-develop-heading">Execute your next big idea.</p>
                            <h2 className="main-develop-heading">Let's develop a powerful, super<br /> useful product</h2>
                            <p className="last-develop-heading">We will help you build an exceptionally high-quality application in a very<br /> timely fashion by recommending the most reliable, experienced remote workers to you.</p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;

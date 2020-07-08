import React from 'react';
import workFromHomeImg from '../../assets/Ilustration/working-from-home.png';

const Intro = () => {
    
    return (
        <section id="intro" className="clearfix">
            <div className="container">
                <div className="intro-img">
                    <img src={workFromHomeImg} alt="workFromHomeImg" className="img-fluid" />
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
        </section>
    )
}

export default Intro

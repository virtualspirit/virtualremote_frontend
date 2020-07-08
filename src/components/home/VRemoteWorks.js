import React from 'react';
import { howItWorksImg1, howItWorksImg2, howItWorksImg3 } from './logo';

const VRemoteWorks = () => {

    return (
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
                            <img className="how-vremote-img" src={howItWorksImg1} alt="howItWorksImg1" />
                        </div>
                    </div>
                    <div className="col-md-6 padd-right-side">
                        <div className="how-vremote-right text-left middle-text">
                            <p className="class-no">1</p>
                            <h5 className="class-no-heading">We interview candidates.</h5>
                            <p className="class-no-text">We will interview several freelancers and will select the right talent for you. So you don't need to spend time interviewing people.</p>
                        </div>
                    </div>
                </div>
                <div className="row how-vremote-row">
                    <div className="col-md-6 padd-left-side">
                        <div className="how-vremote-left text-right middle-text ">
                            <p className="class-no">2</p>
                            <h5 className="class-no-heading">You meet simply the best candidates.</h5>
                            <p className="class-no-text">Talk with us to to find the right freelancers that will help you in the best way possible. Whether you need one or multiple remote workers, you will get the right talent.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="how-vremote-right text-left">
                            <img className="how-vremote-img" src={howItWorksImg2} alt="howItWorksImg2" />
                        </div>
                    </div>
                </div>
                <div className="row how-vremote-row">
                    <div className="col-md-6">
                        <div className="how-vremote-left text-right">
                            <img className="how-vremote-img" src={howItWorksImg3} alt="howItWorksImg3" />
                        </div>
                    </div>
                    <div className="col-md-6 padd-right-side">
                        <div className="how-vremote-right text-left middle-text">
                            <p className="class-no">3</p>
                            <h5 className="class-no-heading">Hire in less time.</h5>
                            <p className="class-no-text">With VRemote, you can save a great amount of time. You simply have to tell us your goals and requirements, and we will handle the rest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VRemoteWorks

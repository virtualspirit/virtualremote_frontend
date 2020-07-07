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
    )
}

export default VRemoteWorks

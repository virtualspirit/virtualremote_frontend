import React from 'react';
import { hire, talent, leading, level, management, needs } from './logo';

const BuildGreatTeam = () => {
    return (
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
                            <img src={hire} alt="buildTeam"/>
                            <h5 className="class-no-heading">Hire on a trial basis</h5>
                            <p className="class-no-text">Work with your new talent on a trial basis. Pay only if you're fully satisfied.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="build-great-column">
                            <img src={talent} alt="buildTeam"/>
                            <h5 className="class-no-heading">Most reliable remote workers</h5>
                            <p className="class-no-text">On this platform, you will get the best classified talent for your business requirements. Every freelancer is reliable.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="build-great-column">
                            <img src={leading} alt="buildTeam"/>
                            <h5 className="class-no-heading">Modern and advanced skills</h5>
                            <p className="class-no-text">The remote workers on Virtual Remote possess the most advanced and modern skills.</p>
                        </div>
                    </div>
                </div>
                <div className="row build-great-sec-row">
                    <div className="col-md-4">
                        <div className="build-great-column">
                            <img src={level} alt="buildTeam"/>
                            <h5 className="class-no-heading">Highly professional freelancers</h5>
                            <p className="class-no-text">The freelancers on VirtualRemote are highly professional with excellent communication skills. It's easy to work with them.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="build-great-column">
                            <img src={management} alt="buildTeam"/>
                            <h5 className="class-no-heading">Smart project management</h5>
                            <p className="class-no-text">With smart project management, your project will get completed in a very systematic manner.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="build-great-column">
                            <img src={needs} alt="buildTeam"/>
                            <h5 className="class-no-heading">Fulfill all of your requirements</h5>
                            <p className="class-no-text">On VRemote, you will find freelancers with different skills. So you can easily fulfill all your business needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildGreatTeam

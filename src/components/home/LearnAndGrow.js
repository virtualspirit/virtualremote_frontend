import React from 'react';
import { learnGrow1, learnGrow2, learnGrow3, idea } from './logo';

const LearnAndGrow = () => {
    const learnings = [
        {
            image: learnGrow1, title: "DESIGN", heading: "The World Is Our Interface - the Evolution of UI Design",
            desc: "Today computers are omnipresent. You can’t escape them. We are living in an exciting age of design and evolving user interfaces..",
            footL: "1 week ago", footR: "CONTINUE READING", titleWidth: "xsmall"
        },
        {
            image: learnGrow2, title: "WEB DEVELOPMENT", heading: "Lighter and Faster - A Guide to the Svelte Framework",
            desc: "Web applications are becoming more popular day by day. They’re a growing world which people choose for its simplicity, speed, and cross-platform availability…",
            footL: "2 days ago", footR: "CONTINUE READING", titleWidth: "small"
        },
        {
            image: learnGrow3, title: "USER EXPERIENCE", heading: "Getting Acquainted – A Guide to User Onboarding Flows",
            desc: "With all the effort and money that goes into crafting digital products, two eye-popping stats are especially concerning: three in four apps are opened only...",
            footL: "4 days ago", footR: "CONTINUE READING", titleWidth: "small"
        }
    ];

    return (
        <div className="learn-grow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="second-heading">Learn and grow</h3>
                    </div>
                </div>
                <div className="row">
                    {learnings.map(({ image, title, heading, desc, footL, footR }, key) => (
                        <div className="col-md-4" key={key}>
                            <div className="learn-grow-column">
                                <img src={image} />
                                <div className="learn-grow-small">
                                    <a className="class-no-link">{title}</a>
                                    <h5 className="class-no-heading">{heading}</h5>
                                    <p className="class-no-text">{desc}</p>
                                    <div className="left-txt text-left">{footL}</div>
                                    <div className="right-txt text-right"><a >{footR}<i className="fa fa-long-arrow-right" /></a></div>
                                </div>
                            </div>
                        </div>
                    ))}
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
    )
}

export default LearnAndGrow

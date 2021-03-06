import React from 'react';
import learnGrow1 from '../../../assets/LearnAndGrow/1.png';
import learnGrow2 from '../../../assets/LearnAndGrow/2.png';
import learnGrow3 from '../../../assets/LearnAndGrow/3.png';
import LazyImage from '../../common/LazyImage';
import { useDispatch } from "react-redux";
import { navigateTo } from '../../../store/actions/route'

const OtherPost = () => {
    const dispatch = useDispatch();
    return (
        <div className="bloglist-section bloglist-section-down">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="second-heading">Other interesting posts</h3>
                    </div>
                </div>
                <div className="row bloglist-row">
                    <div className="col-md-4">
                        <div className="bloglist-column" style={{ cursor: "pointer" }}
                            onClick={() => { dispatch(navigateTo({ path: `/blog-detail` })) }}>
                            <LazyImage src={learnGrow1} alt={learnGrow1} />
                            <div className="bloglist-small">
                                <a className="class-no-link pointer">DESIGN</a>
                                <h5 className="class-no-heading">The World Is Our Interface - the Evolution of UI Design</h5>
                                <p className="class-no-text">Today computers are omnipresent. You can’t escape them. We are living in an exciting age of design and evolving user interfaces..</p>
                                <div className="left-txt text-left">1 week ago</div>
                                <div className="right-txt text-right"><a className="pointer">CONTINUE READING<i className="fa fa-long-arrow-right" /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bloglist-column" style={{ cursor: "pointer" }}
                            onClick={() => { dispatch(navigateTo({ path: `/blog-detail` })) }}>
                            <LazyImage src={learnGrow2} alt={learnGrow2} />
                            <div className="bloglist-small">
                                <a className="class-no-link pointer">WEB DEVELOPMENT</a>
                                <h5 className="class-no-heading">Lighter and Faster - A Guide to the Svelte Framework</h5>
                                <p className="class-no-text">Web applications are becoming more popular day by day. They’re a growing world which people choose for its simplicity, speed, and cross-platform availability…</p>
                                <div className="left-txt text-left">2 days ago</div>
                                <div className="right-txt text-right"><a className="pointer">CONTINUE READING<i className="fa fa-long-arrow-right" /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bloglist-column" style={{ cursor: "pointer" }}
                            onClick={() => { dispatch(navigateTo({ path: `/blog-detail` })) }}>
                            <LazyImage src={learnGrow3} alt={learnGrow3} />
                            <div className="bloglist-small">
                                <a className="class-no-link pointer">USER EXPERIENCE</a>
                                <h5 className="class-no-heading">Getting Acquainted – A Guide to User Onboarding Flows</h5>
                                <p className="class-no-text">With all the effort and money that goes into crafting digital products, two eye-popping stats are especially concerning: three in four apps are opened only...</p>
                                <div className="left-txt text-left">4 days ago</div>
                                <div className="right-txt text-right"><a className="pointer">CONTINUE READING<i className="fa fa-long-arrow-right" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherPost

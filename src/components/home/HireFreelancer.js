import React from 'react';
import { useDispatch } from "react-redux";
import { navigateTo } from '../../store/actions/route'

const HireFreelancer = () => {
    const dispatch = useDispatch();

    return (
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
                            <a className="call-buttn scrollto pointer"><i className="fa fa-phone" />Schedule a call</a>
                        </div>
                    </div>
                    <div className="col-md-6 text-left">
                        <div className="talent-btn">
                            <a className="talent-buttn scrollto pointer"
                                onClick={() => { dispatch(navigateTo({ path: `/join-us` })) }}>JOIN AS A TALENT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireFreelancer

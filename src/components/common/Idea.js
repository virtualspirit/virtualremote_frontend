import React from 'react';
import idea from '../../assets/Graphic/Idea.svg';
import LazyImage from './LazyImage';
import { useDispatch } from "react-redux";
import { navigateTo } from '../../store/actions/route'

const Idea = () => {
    const dispatch = useDispatch();

    return (
        <div className="container-fluid base-container">
            <div className="row">
                <div className="col-md-12">
                    <div className="base">
                        <div className="row">
                            <div className="col-md-1">
                                <div className="base-img"><LazyImage src={idea} alt="idea" noNeedWidth={true} /></div>
                            </div>
                            <div className="col-md-8">
                                <div className="base-text">
                                    <p className="base-heading-text">Expand your business with us</p>
                                    <h3 className="base-heading">Work with the best companies</h3>
                                </div>
                            </div>
                            <div className="col-md-3 text-right">
                                <div className="base-btn"><button className="base-join-btn"
                                    onClick={() => { dispatch(navigateTo({ path: `/join-us` })) }}>JOIN AS A TALENT <i className="fa fa-long-arrow-right" /></button> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Idea

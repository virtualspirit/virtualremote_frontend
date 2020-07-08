import React from 'react';
import {
    clogo1, clogo2, clogo3, clogo4, clogo5, clogo6, clogo7, clogo8, clogo9, clogo10,
    clogo11, clogo12, clogo13, clogo14, clogo15, IconQuote
} from './logo';
import LazyImage from '../common/LazyImage';


const TrustedBy = () => {
    const clientLogos = [clogo1, clogo2, clogo3, clogo5, clogo11, clogo6, clogo7, clogo8, clogo4, clogo9, clogo10, clogo12, clogo13, clogo14, clogo15];

    return (
        <div className="trusted-companies">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="second-heading">Trusted by hundreds of hot startups and great companies.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="company-logo-section">
                        <ul className="company-logo-ul">
                            {clientLogos.map((clogo, key) => <li key={key} className="company-logo-item"><LazyImage src={clogo} alt="clientLogo" /></li>)}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="build-great-column">
                            <LazyImage src={IconQuote} alt="IconQuote" />
                            <p className="class-no-text">“The biggest advantage and benefit of working with VRemote is the tremendous reduction in time spent sourcing quality candidates. We’re able to identify the talent in a matter of days.”</p>
                            <h5 className="class-no-heading">Philip Tsai</h5>
                            <p className="class-no-text">Product Manager at SASA</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="build-great-column">
                            <LazyImage src={IconQuote} alt="IconQuote" />
                            <p className="class-no-text">“The biggest advantage and benefit of working with VRemote is the tremendous reduction in time spent sourcing quality candidates. We’re able to identify the talent in a matter of days.”</p>
                            <h5 className="class-no-heading">Philip Tsai</h5>
                            <p className="class-no-text">Product Manager at SASA</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="build-great-column">
                            <LazyImage src={IconQuote} alt="IconQuote" />
                            <p className="class-no-text">“The biggest advantage and benefit of working with VRemote is the tremendous reduction in time spent sourcing quality candidates. We’re able to identify the talent in a matter of days.”</p>
                            <h5 className="class-no-heading">Philip Tsai</h5>
                            <p className="class-no-text">Product Manager at SASA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustedBy

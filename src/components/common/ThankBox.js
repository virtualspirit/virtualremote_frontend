import React from 'react';
import IconSuccess from '../../assets/Alert/IconSuccess.svg';
import LazyImage from '../common/LazyImage';

const ThankBox = () => {
    return (
        <div className="form-section text-left">
            <div className="form-section-div">
                <div className="form-section-form" >
                    <div className="message-section text-center">
                        <LazyImage className="thnk-icon" src={IconSuccess} noNeedWidth={true} />
                        <h4 className="thnk-mess">Thank you for applying!</h4>
                        <p className="thnk-mess-text">We will review your application and will let you know soon.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankBox

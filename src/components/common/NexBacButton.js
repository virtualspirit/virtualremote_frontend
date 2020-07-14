import React from 'react';

const NexBacButton = ({ qn, backButtonHandler, nextButtonHandler }) => {
    const handleButtonClick = (e, callButton) => {
        e.preventDefault();
        callButton({ qn: Number(qn) });
    }
    return (
        <div className="nex-bac-button">
            <button className="back-btn"
                onClick={e => handleButtonClick(e, backButtonHandler)}>
                <i className="fa fa-long-arrow-left" />Back
            </button>
            <span style={{padding: '0 2px'}}></span>
            <button className="next-btn"
                onClick={e => handleButtonClick(e, nextButtonHandler)}>
                Next<i className="fa fa-long-arrow-right" />
            </button>
        </div>
    )
}

export default NexBacButton

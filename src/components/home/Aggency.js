import React from 'react';

const Aggency = () => {
    const contents = [
        { title: "Talk to an expert", desc: "One of our industry experts will work with you to understand your requirements, business goals, and preferences." },
        { title: "Get introduced to the right talent", desc: "We will help you find the right candidate within a few days. 24 hours is the average time we take." },
        { title: "Hire on a trial basis", desc: "Work with your new talent on a trial basis. Pay only if you're fully satisfied." }
    ];

    return (
        <div className="agencies-effortlessly">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="second-heading">Hire the world-class freelancers and agencies effortlessly.</h3>
                    </div>
                </div>
                <div className="row effortlessly-row">
                    {contents.map(({ title, desc }, key) => (
                        <div className="col-md-4 text-center effortlessly-column" key={key}>
                            <p className="class-no">{key + 1}</p>
                            <h5 className="class-no-heading">{title}</h5>
                            <p className="class-no-text">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aggency

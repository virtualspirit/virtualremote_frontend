import React from 'react';
import { skill1, skill2, skill3, skill4, skill6, skill7, skill8, } from './logo';

const FindYourWork = () => {
    const skills = [{ name: "CTO", icon: skill8 }, { name: "Ruby on Rails", icon: skill1 }, { name: "React Native", icon: skill2 },
    { name: "React", icon: skill6 }, { name: "Wordpress", icon: skill3 }, { name: "Designer", icon: skill4 },
    { name: "Frontend Developer", icon: skill7 }];

    return (
        <div className="find-work">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="second-heading">Find work that you are passionate about</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="skill-section">
                            <ul className="skill-ul">
                                {skills.map(({ name, icon }, key) => (
                                    <li className="skill-item" key={key}>
                                        <img src={icon} /><p className="skill-txt">{name}</p><a >Learn <i className="fa fa-angle-right" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindYourWork

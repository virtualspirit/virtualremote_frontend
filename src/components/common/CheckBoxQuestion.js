import React from 'react'

const CheckBoxQuestion = ({ question = "", options = [], checkedOptions, onChangeHandler, children }) => {

    return (
        <div className="form-section text-left">
            <div className="form-section-div">
                <h5 className="form-section-heading">
                    {question}
                </h5>
                <form className="form-section-form" >
                    <div className="all-rad-btn">
                        {options.map(({ value, desc }, key) => (
                            <div className="form-group" key={key}>
                                <input type="checkbox" id={value} defaultChecked={checkedOptions?.[question]?.includes(`${value}:${desc}`)}
                                onChange={({target}) => onChangeHandler({ q: question, a: `${value}:${desc}`, isCheck: true, isRemove: !target.checked })}
                                />
                                <label htmlFor={value} >{value}</label><p className="rad_para_txt">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <hr />
                    {children}
                </form>
            </div>
        </div>
    )
}

export default CheckBoxQuestion

import React from 'react';
import activeCheck from '../../assets/Checkbox/Active.svg';
import normalCheck from '../../assets/Checkbox/Normal.svg';

const CheckBoxQuestion = ({ question = "", options = [], checkedOptions, onChangeHandler, children }) => {
    const [isActive, setIsActive] = React.useState({});
    React.useEffect(_ => { setIsActive(p => Object.assign({}, p, ...[...options, ...(checkedOptions?.[question] ?? [])]?.map((c) => (c?.desc ? { [`${c.value}:${c.desc}`]: false } : { [c]: true })))) }, [question])

    return (
        <div className="form-section text-left">
            <div className="form-section-div">
                <h5 className="form-section-heading">
                    {question}
                </h5>
                <form className="form-section-form" >
                    <div className="all-rad-btn">
                        {options.map(({ value, desc }, key) => (
                            <div className="form-group" key={key} >
                                <input type="checkbox" id={value} defaultChecked={checkedOptions?.[question]?.includes(`${value}:${desc}`)}
                                    onChange={({ target }) => onChangeHandler({ q: question, a: `${value}:${desc}`, isCheck: true, isRemove: !target.checked })}
                                    onClick={_ => setIsActive(p => ({ ...p, [`${value}:${desc}`]: !p[`${value}:${desc}`] }))}
                                />
                                <label style={{ background: `url(${isActive[`${value}:${desc}`] ? activeCheck : normalCheck}) no-repeat` }}
                                    htmlFor={value} >{value}</label><p className="rad_para_txt">{desc}</p>
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

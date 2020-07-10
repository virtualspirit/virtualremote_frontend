import React from 'react'

const RadioQuestionBox = ({ question = "", options = [], selectedOption, othersAnswer, onChangeHandler, children }) => {
    const [inputVal, setInputVal] = React.useState({});
    const checkedStyle = {
        active: {
            boxShadow: "inset 0 0 0 3px #fff",
            background: "#574cfa"
        },
        normal: {
            boxShadow: "none",
            background: "#fff"
        }
    }
    const radioHead = (q, classStyle) => <h5 className={classStyle}>{q}</h5>;
    const radioOption = (quest, opts) => {
        return opts.map(({ value, desc, q = "", options: qOptions }, key) => (
            q ? <span key={key}>
                {radioHead(q, "form-section-heading o-padding")}
                {radioOption(q, qOptions)}
            </span> : <div className="radio1" key={key}>
                    <label className="rad">
                        <input type="radio" value={value}
                            onClick={() => {
                                value === `Others` && setInputVal(p => ({ ...p, [quest]: othersAnswer?.[quest] ?? "" }))
                                onChangeHandler({ q: quest, a: { value, desc } })
                            }} />
                        <i style={checkedStyle[selectedOption?.[quest] === value ? `active` : `normal`]} />{` `}{value}
                        {value !== "Others" && <p className="rad_para_txt">{desc}</p>}
                    </label>
                    {value === "Others" && selectedOption?.[quest] === "Others" && <>
                        <br />
                        <input className="other-text" type="text" placeholder="type here" value={inputVal?.[quest]}
                            onChange={({ target: { value: inValue } }) => {
                                setInputVal(prev => ({ ...prev, [quest]: inValue }));
                                onChangeHandler({ q: quest, a: { value, desc: inValue } });
                            }} />
                    </>}
                </div>
        ))
    };

    return (
        <div className="form-section text-left">
            <div className="form-section-div">
                {radioHead(question, "form-section-heading")}
                <form className="form-section-form">
                    <div className="all-rad-btn">
                        {radioOption(question, options)}
                    </div>
                    <hr />
                    {children}
                </form>
            </div>
        </div>
    )
}

export default RadioQuestionBox

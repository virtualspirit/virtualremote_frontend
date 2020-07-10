import React from 'react';

const TextAreaQuestionBox = ({ question = "", placeHolder = "", textAreaAnswer = "", onChangeHandler, children }) => {
    const [inputVal, setInputVal] = React.useState("");
    React.useEffect(() => { setInputVal(textAreaAnswer ?? "") }, [question]);

    return (
        <div className="form-section text-left">
            <div className="form-section-div">
                <h5 className="form-section-heading">
                    {question}
                </h5>
                <form className="form-section-form">
                    <div className="all-rad-btn">
                        <textarea className="form-section-txtarea no-resize" placeholder={placeHolder} cols={30} rows={5} value={inputVal}
                            onChange={({ target: { value } }) => {
                                setInputVal(value)
                                onChangeHandler({ q: question, a: value })
                            }} />
                    </div>
                    <hr />
                    {children}
                </form>
            </div>
        </div>

    )
}

export default TextAreaQuestionBox

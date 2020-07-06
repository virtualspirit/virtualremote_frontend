import React, { useEffect } from 'react';
import { ResponsiveContext } from 'grommet';
import { useSelector, useDispatch } from "react-redux";
import { StackTopPositioned } from '../common/styledComponents';
import QuestionBoxTitleContainer from '../common/QuestionBoxTitleContainer';
import QuestionBoxContainer from '../common/QuestionBoxContainer';
import RadioButtonQuestion from '../common/RadioButtonQuestion';
import TextAreaQuestion from '../common/TextAreaQuestion';
import ThankBox from '../common/ThankBox';
import { questions } from './questions';
import { setInitialValue, changeHandler, backHandler, nextHandler } from '../../store/actions/applyUs';
import { getState } from '../../store/selectors/applyUs';

const QuestionBoxTitle = ({ rowSize, setRowSize }) => {
    const size = React.useContext(ResponsiveContext);
    const dispatch = useDispatch();
    const {
        currentQuestion: { rowSize: adjustSize, type, qn, question, options, placeHolder, textAreaAnswer },
        selectedOption
    } = useSelector(getState);

    useEffect(() => { dispatch(setInitialValue({ questions })) }, []);
    useEffect(() => {
        if (!adjustSize) return;
        const adjustForScreen = size === 'small' ? size : 'normal';
        setRowSize(p => ({ ...p, [adjustForScreen]: { ...p[adjustForScreen], ['empty']: adjustSize[adjustForScreen] } }))
    }, [adjustSize, size]);

    const radioButtonQuestionProps = {
        question, options, value: selectedOption,
        onChangeHandler: value => dispatch(changeHandler(value))
    };
    const textAreaQuestionProps = {
        question, placeHolder, value: textAreaAnswer,
        onChangeHandler: value => dispatch(changeHandler(value))
    };
    const questionBoxContainerProps = {
        qn, hideButton: type === `thank`,
        ...((type === `radio` || type === `textArea`) && {
            backButtonHandler: value => dispatch(backHandler(value)),
            nextButtonHandler: value => dispatch(nextHandler(value))
        })
    };

    return (
        <StackTopPositioned fill anchor="top"  {...{ size }}
            adjustChildTopPosition={size === 'small' ? "13rem" : "12rem"}>
            <QuestionBoxTitleContainer
                topText="APPLY AS A FREELANCE DEVELOPER"
                title="Join our network of professional freelancers"
                desc="On VRemote, you can work with amazing clients and grow your freelance business."
            />
            <QuestionBoxContainer {...questionBoxContainerProps} >
                {type === `radio` && <RadioButtonQuestion {...radioButtonQuestionProps} />}
                {type === `textArea` && <TextAreaQuestion {...textAreaQuestionProps} />}
                {type === `thank` && <ThankBox />}
            </QuestionBoxContainer>
        </StackTopPositioned>
    )
}

export default QuestionBoxTitle
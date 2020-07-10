import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Head from '../common/Head';
import Footer from '../common/Footer';
import Idea from '../common/Idea';
import Intro from './Intro';
import RadioQuestionBox from '../common/RadioQuestionBox';
import TextAreaQuestionBox from '../common/TextAreaQuestionBox';
import NexBacButton from '../common/NexBacButton';
import ThankBox from '../common/ThankBox';
import Form from './Form';
import { questions } from './questions';
import { setInitialValue, changeHandler, backHandler, nextHandler } from '../../store/actions/applyUs';
import { getState } from '../../store/selectors/applyUs';

const ApplyUs = () => {
    const dispatch = useDispatch();
    const {
        currentQuestion: { type, classForIdea, qn, question, options, placeHolder, textAreaAnswer, othersAnswer },
        selectedOption
    } = useSelector(getState);
    React.useEffect(() => { dispatch(setInitialValue({ questions })) }, []);

    const radioQuestionBoxProps = {
        question, options, selectedOption, othersAnswer,
        onChangeHandler: value => dispatch(changeHandler(value))
    };
    const textAreaQuestionProps = {
        question, placeHolder, textAreaAnswer,
        onChangeHandler: value => dispatch(changeHandler(value))
    };
    const nexBacButtonProps = {
        qn,
        backButtonHandler: value => dispatch(backHandler(value)),
        nextButtonHandler: value => dispatch(nextHandler(value))
    };
    const getQuestionComponent = (name) => {
        let QuestionComponent, props;
        switch (name) {
            case `radio`: QuestionComponent = RadioQuestionBox; props = radioQuestionBoxProps; break;
            case `textArea`: QuestionComponent = TextAreaQuestionBox; props = textAreaQuestionProps; break;
            case `form`: QuestionComponent = Form; props = nexBacButtonProps; break;
            case `thank`: QuestionComponent = ThankBox; break;
            default: break;
        }
        return (QuestionComponent && <QuestionComponent {...props}>
            {name !== `thank` && <NexBacButton {...nexBacButtonProps} />}
        </QuestionComponent>);
    }

    return (
        <>
            <Head />
            <Intro>{getQuestionComponent(type)}</Intro>
            <div className={classForIdea}><Idea /></div>
            <Footer />
        </>
    )
}

export default ApplyUs

import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Head from '../common/Head';
import Footer from '../common/Footer';
import Idea from '../common/Idea';
import Intro from './Intro';
import RadioQuestionBox from '../common/RadioQuestionBox';
import NexBacButton from '../common/NexBacButton';
import ThankBox from '../common/ThankBox';
import CheckBoxQuestion from '../common/CheckBoxQuestion';
import InputTagQuestion from '../common/InputTagQuestion';
import Form from './Form';
import { questions } from './questions';
import { setInitialValue, changeHandler, backHandler, nextHandler } from '../../store/actions/startProject';
import { getState } from '../../store/selectors/startProject';

const StartAProject = () => {
    const dispatch = useDispatch();
    const {
        currentQuestion: { type, classForIdea, qn, question, options, suggestions },
        selectedOption, checkedOptions, selectedTag
    } = useSelector(getState);
    React.useEffect(() => { dispatch(setInitialValue({ questions })) }, []);

    const radioQuestionBoxProps = {
        question, options, selectedOption,
        onChangeHandler: value => dispatch(changeHandler(value))
    };
    const checkBoxQuestionProps = {
        question, options, checkedOptions,
        onChangeHandler: value => dispatch(changeHandler(value))
    };
    const inputTagQuestionProps = {
        question, suggestions, selectedTag: [{ id: "React", text: 'React' }],
        onChangeHandler: value => dispatch(changeHandler(value))
    };
    const nexBacButtonProps = {
        qn, isForm: type === `form`,
        backButtonHandler: value => dispatch(backHandler(value)),
        nextButtonHandler: value => dispatch(nextHandler(value))
    };
    const getQuestionComponent = (name) => {
        let QuestionComponent, props;
        switch (name) {
            case `radio`: QuestionComponent = RadioQuestionBox; props = radioQuestionBoxProps; break;
            case `checkbox`: QuestionComponent = CheckBoxQuestion; props = checkBoxQuestionProps; break;
            case `tagInput`: QuestionComponent = InputTagQuestion; props = inputTagQuestionProps; break;
            case `form`: QuestionComponent = Form; break;
            case `thank`: QuestionComponent = ThankBox; break;
            default: break;
        }
        return (QuestionComponent && <QuestionComponent {...props}>
            {name !== `thank` && <NexBacButton {...nexBacButtonProps} />}
        </QuestionComponent>);
    }

    return (
        <div>
            <Head />
            <Intro>
                {getQuestionComponent(type)}
            </Intro>
            <div className={classForIdea}><Idea /></div>
            <Footer />
        </div>
    )
}

export default StartAProject


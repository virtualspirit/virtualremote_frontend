import { call, put, select, takeLatest } from "redux-saga/effects";
import { setChangedValue, setCurrentQuestion, setCurrentAnswer } from "../actions/applyUs";
import * as actionTypes from '../actions/types';
import { getState } from '../selectors/applyUs';

function* changeHandler({ q, a }) {
    console.log("Q & A", q, ":- ", a);
    yield put(setChangedValue({ selectedOption: a.value }));
    yield put(setCurrentAnswer({ q, a }));
}

function* backHandler({ questionNumber }) {
    const currentQuestionIndex = yield questionNumber - 1;
    yield call(navigateQuestion, currentQuestionIndex - 1);
}

function* nextHandler({ questionNumber }) {
    const currentQuestionIndex = yield questionNumber - 1;
    yield call(navigateQuestion, currentQuestionIndex + 1);
}

function* navigateQuestion(questionIndex) {
    const { questions, selectedAnswers } = yield select(getState);
    if (!questions?.[questionIndex]) return;
    const selectedOption = selectedAnswers?.[questions[questionIndex].question]?.value;
    yield put(setChangedValue({ selectedOption }));
    const currentQuestion = yield call(getCurrentQuestion, {
        questions, questionIndex, selectedAnswers, selectedOption
    });
    console.log("currentQuestion", currentQuestion)
    yield put(setCurrentQuestion({ currentQuestion }));
};

const getCurrentQuestion = ({ questions, questionIndex, selectedAnswers, selectedOption }) => {
    const question = questions[questionIndex];
    const answer = selectedAnswers?.[question.question];
    switch (question.type) {
        case `radio`: {
            const prevOptions = selectedOption === `Others` &&
                [...questions[questionIndex].options.filter(({ value }) => value !== `Others`),
                { value: "Others", desc: answer?.desc }];
            return { ...question, ...(prevOptions && { [`options`]: prevOptions }) }
        };
        case `textArea`: {
            return { ...question, ...(typeof answer === "string" && { textAreaAnswer: answer }) }
        };
        default: return question;
    }
}

export const applyUs = [
    takeLatest(actionTypes.APPLY_US_CHANGE_HANDLER, changeHandler),
    takeLatest(actionTypes.APPLY_US_BACK_BUTTON_HANDLER, backHandler),
    takeLatest(actionTypes.APPLY_US_NEXT_BUTTON_HANDLER, nextHandler),
]
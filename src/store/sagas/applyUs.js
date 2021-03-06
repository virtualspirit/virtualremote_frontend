import { call, put, select, takeLatest } from "redux-saga/effects";
import { setChangedValue, setCurrentQuestion, setCurrentAnswer } from "../actions/applyUs";
import * as actionTypes from '../actions/types';
import { getState } from '../selectors/applyUs';

function* changeHandler({ q, a }) {
    console.log("Q & A", q, ":- ", a);
    yield put(setChangedValue({ selectedOption: { [q]: a.value } }));
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
    let subQuestPrevOptions = {};
    const getSelectedOptions = (options) => {
        options && options.map(({ q, options }) => {
            if (q) {
                subQuestPrevOptions = { ...subQuestPrevOptions, [q]: selectedAnswers[q]?.value };
                getSelectedOptions(options);
            }
        });
    };
    yield getSelectedOptions(questions[questionIndex].options);
    const selectedOption = { [questions[questionIndex].question]: selectedAnswers?.[questions[questionIndex].question]?.value, ...subQuestPrevOptions };
    yield put(setChangedValue({ selectedOption }));
    const currentQuestion = yield call(getCurrentQuestion, {
        questions, questionIndex, selectedAnswers, selectedOption
    });
    yield put(setCurrentQuestion({ currentQuestion }));
};

const getCurrentQuestion = ({ questions, questionIndex, selectedAnswers, selectedOption }) => {
    const question = questions[questionIndex];
    const answer = selectedAnswers?.[question.question];
    switch (question.type) {
        case `radio`: {
            const getOthersAnswer = () => {
                const othersOptionAnswers = Object.entries(selectedOption).map(([key, val]) => val === `Others` && ({ [key]: selectedAnswers[key]?.desc }))
                return Object.assign({}, ...othersOptionAnswers)
            }
            return { ...question, othersAnswer: { ...getOthersAnswer() } }
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
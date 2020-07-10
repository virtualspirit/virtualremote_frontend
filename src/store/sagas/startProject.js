import { call, put, select, takeLatest } from "redux-saga/effects";
import { setChangedValue, setCurrentQuestion, setCurrentAnswer } from "../actions/startProject";
import * as actionTypes from '../actions/types';
import { getState } from '../selectors/startProject';

function* changeHandler({ q, a, isCheck, isRemove, isTag }) {
    console.log("Q & A", q, ":- ", a);
    if (isCheck) {
        yield put(setChangedValue({ checkedOptions: { q, [isRemove ? `r` : `a`]: a } }));
        const { checkedOptions } = yield select(getState);
        yield put(setCurrentAnswer({ q, a: [...checkedOptions[q]] }));
    } else if (isTag) {
        yield put(setChangedValue({ selectedTag: { q, a } }));
        yield put(setCurrentAnswer({ q, a }));
    } else {
        yield put(setChangedValue({ selectedOption: { [q]: a.value } }));
        yield put(setCurrentAnswer({ q, a }));
    }
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
    const checkedOptions = { q: questions[questionIndex].question, a: selectedAnswers?.[questions[questionIndex].question] };
    const selectedTag = { q: questions[questionIndex].question, a: selectedAnswers?.[questions[questionIndex].question] ?? [] };
    if (questions[questionIndex].type === `checkbox`) {
        yield put(setChangedValue({ checkedOptions }));
    } else if (questions[questionIndex].type === `tagInput`) {
        yield put(setChangedValue({ selectedTag}));
    } else {
        yield put(setChangedValue({ selectedOption }));
    }
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
        default: return question;
    }
}

export const startProject = [
    takeLatest(actionTypes.START_PROJECT_CHANGE_HANDLER, changeHandler),
    takeLatest(actionTypes.START_PROJECT_BACK_BUTTON_HANDLER, backHandler),
    takeLatest(actionTypes.START_PROJECT_NEXT_BUTTON_HANDLER, nextHandler),
]
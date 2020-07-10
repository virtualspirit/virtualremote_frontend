import * as actionTypes from './types';

export const setInitialValue = (payload) => ({
    type: actionTypes.START_PROJECT_SET_INITIAL_STATE, payload
});
export const setChangedValue = (payload) => ({
    type: actionTypes.START_PROJECT_SET_VALUE, payload
});
export const setCurrentQuestion = (payload) => ({
    type: actionTypes.START_PROJECT_SET_CURRENT_QUESTION, payload
});
export const setCurrentAnswer = (payload) => ({
    type: actionTypes.START_PROJECT_SET_ANSWERS, payload
});
export const changeHandler = (payload) => ({
    type: actionTypes.START_PROJECT_CHANGE_HANDLER, ...payload
});
export const backHandler = ({ qn }) => ({
    type: actionTypes.START_PROJECT_BACK_BUTTON_HANDLER, questionNumber: qn
});
export const nextHandler = ({ qn }) => ({
    type: actionTypes.START_PROJECT_NEXT_BUTTON_HANDLER, questionNumber: qn
});

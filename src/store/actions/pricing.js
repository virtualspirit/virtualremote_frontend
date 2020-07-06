import * as actionTypes from './types';

export const setInitialValue = (payload) => ({
    type: actionTypes.PRICING_SET_INITIAL_STATE, payload
});
export const setChangedValue = (payload) => ({
    type: actionTypes.PRICING_SET_VALUE, payload
});
export const setCurrentQuestion = (payload) => ({
    type: actionTypes.PRICING_SET_CURRENT_QUESTION, payload
});
export const setCurrentAnswer = (payload) => ({
    type: actionTypes.PRICING_SET_ANSWERS, payload
});
export const changeHandler = (payload) => ({
    type: actionTypes.PRICING_CHANGE_HANDLER, ...payload
});
export const backHandler = ({ qn }) => ({
    type: actionTypes.PRICING_BACK_BUTTON_HANDLER, questionNumber: qn
});
export const nextHandler = ({ qn }) => ({
    type: actionTypes.PRICING_NEXT_BUTTON_HANDLER, questionNumber: qn
});

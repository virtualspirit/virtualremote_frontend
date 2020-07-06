import * as actionTypes from '../actions/types';

const initialState = {
    questions: [],
    currentQuestion: {},
    selectedOption: "",
    selectedAnswers: {}
};

const applyUs = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.APPLY_US_SET_INITIAL_STATE:
            return {
                ...state,
                questions: payload?.questions ?? [],
                currentQuestion: payload?.questions?.[0]
            };
        case actionTypes.APPLY_US_SET_VALUE:
            return {
                ...state,
                selectedOption: payload?.selectedOption ?? ""
            };
        case actionTypes.APPLY_US_SET_CURRENT_QUESTION:
            return {
                ...state, ...payload
            };
        case actionTypes.APPLY_US_SET_ANSWERS:
            return {
                ...state,
                selectedAnswers: { ...state.selectedAnswers, [payload.q]: payload.a }
            };
        default:
            return state;
    }
};

export default applyUs;
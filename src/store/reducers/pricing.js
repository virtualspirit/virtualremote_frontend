import * as actionTypes from '../actions/types';

const initialState = {
    questions: [],
    currentQuestion: {},
    selectedOption: "",
    selectedAnswers: {}
};

const pricing = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.PRICING_SET_INITIAL_STATE:
            return {
                ...state,
                questions: payload?.questions ?? [],
                currentQuestion: payload?.questions?.[0]
            };
        case actionTypes.PRICING_SET_VALUE:
            return {
                ...state,
                selectedOption: payload?.selectedOption ?? ""
            };
        case actionTypes.PRICING_SET_CURRENT_QUESTION:
            return {
                ...state, ...payload
            };
        case actionTypes.PRICING_SET_ANSWERS:
            return {
                ...state,
                selectedAnswers: { ...state.selectedAnswers, [payload.q]: payload.a }
            };
        default:
            return state;
    }
};

export default pricing;
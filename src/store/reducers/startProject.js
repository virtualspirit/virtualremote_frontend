import * as actionTypes from '../actions/types';

const initialState = {
    questions: [],
    currentQuestion: {},
    selectedOption: {},
    checkedOptions: {},
    selectedTag: {},
    selectedAnswers: {}
};

const startProject = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.START_PROJECT_SET_INITIAL_STATE:
            return {
                ...state,
                questions: payload?.questions ?? [],
                currentQuestion: payload?.questions?.[0]
            };
        case actionTypes.START_PROJECT_SET_VALUE:
            return {
                ...state,
                selectedOption: { ...state.selectedOption, ...(payload?.selectedOption ?? {}) },
                checkedOptions: typeof payload?.checkedOptions?.[`a`] === 'object' ? { [payload?.checkedOptions?.[`q`]]: payload?.checkedOptions?.[`a`] }
                    : {
                        ...state.checkedOptions, [payload?.checkedOptions?.[`q`]]:
                            [...(state.checkedOptions?.[payload?.checkedOptions?.[`q`]]?.filter(v => payload?.checkedOptions?.[`r`] ? payload?.checkedOptions?.[`r`] !== v : v) ?? []),
                            payload?.checkedOptions?.[`a`]]
                    },
                selectedTag: { ...state.selectedTag, [payload?.selectedTag?.[`q`]]: payload?.selectedTag?.[`a`] ?? [] }
            };
        case actionTypes.START_PROJECT_SET_CURRENT_QUESTION:
            return {
                ...state, ...payload
            };
        case actionTypes.START_PROJECT_SET_ANSWERS:
            return {
                ...state,
                selectedAnswers: { ...state.selectedAnswers, [payload.q]: payload.a }
            };
        default:
            return state;
    }
};

export default startProject;
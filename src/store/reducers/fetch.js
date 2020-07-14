import * as actionTypes from '../actions/types';

const initialState = {
    loading: false,
    error: false
};

const fetchData = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.SUCCESS:
            return {
                ...state,
                [action.name]: { data: action.payload, error: false },
                loading: false
            };;
        case actionTypes.FAILURE:
            return {
                ...state,
                [action.name]: { data: action.payload, error: true },
                loading: false
            };
        default:
            return state;
    }
};

export default fetchData;
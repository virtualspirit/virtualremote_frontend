import * as actionTypes from './types';

export const navigateTo = (payload) => ({
    type: actionTypes.NAVIGATE_TO, ...payload
});
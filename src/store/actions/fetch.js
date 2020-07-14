import * as actionTypes from './types';

export const fetchData = (url, name) => ({
  type: actionTypes.FETCH_DATA,
  url: url,
  name: name
});
export const fetchRequest = () => ({ type: actionTypes.REQUEST });
export const fetchSuccess = (payload, name) => ({
  type: actionTypes.SUCCESS,
  payload,
  name
});
export const fetchError = (payload, name) => ({ type: actionTypes.FAILURE, payload, name });
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchRequest, fetchSuccess, fetchError } from "../actions/fetch";
import * as actionTypes from '../actions/types';

const fetchURL = async url => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    return e;
  }
};

function* fetchSaga(action) {
  try {
    yield put(fetchRequest());
    const response = yield call(fetchURL, action.url);
    if (response) {
      yield put(fetchSuccess(response, action.name));
    }
  } catch (error) {
    yield put(fetchError(error, action.name));
  }
}

export const fetchData = [
    takeEvery(actionTypes.FETCH_DATA, fetchSaga),
    takeLatest(actionTypes.FETCH_DATA_SYNC, fetchSaga)
]
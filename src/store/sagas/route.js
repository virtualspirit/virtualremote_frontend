import { put, takeLatest } from "redux-saga/effects";
import { push } from 'connected-react-router'
import * as actionTypes from '../actions/types';

function* navigate({ path }) {
    console.log("path", path)
    yield put(push(path))
}

export const route = [
    takeLatest(actionTypes.NAVIGATE_TO, navigate)
]
import { all } from 'redux-saga/effects';
import { route } from './route';
import { fetchData } from './fetch';
import { applyUs } from './applyUs';
import { startProject } from './startProject';

export default function* rootSaga() {
   yield all([...route, ...fetchData, ...applyUs, ...startProject]);
}
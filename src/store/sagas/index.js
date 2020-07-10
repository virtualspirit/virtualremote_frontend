import { all } from 'redux-saga/effects';
import { applyUs } from './applyUs';
import { startProject } from './startProject';
import { route } from './route';

export default function* rootSaga() {
   yield all([...route, ...applyUs, ...startProject]);
}
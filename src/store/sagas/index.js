import { all } from 'redux-saga/effects';
import { applyUs } from './applyUs';
import { pricing } from './pricing';
import { route } from './route';

export default function* rootSaga() {
   yield all([...route, ...applyUs, ...pricing]);
}
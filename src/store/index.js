import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootReducer, { history } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
const composeEnhancers = (isChrome && process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(routerMiddleware(history), ...middlewares)));
sagaMiddleware.run(rootSaga);
export { history };
export default store;
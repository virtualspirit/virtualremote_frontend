import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const appReducer = combineReducers({
  router: connectRouter(history)
});

const rootReducer = (state, action) => {
  return appReducer(action.type === `LOGOUT` ? undefined : state, action)
}

export default rootReducer;
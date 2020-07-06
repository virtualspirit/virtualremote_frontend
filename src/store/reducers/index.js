import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import applyUs from './applyUs';
import pricing from './pricing';

export const history = createBrowserHistory();
const appReducer = combineReducers({
  router: connectRouter(history),
  applyUs, pricing
});

const rootReducer = (state, action) => {
  return appReducer(action.type === `REMOVE_APP_STATES` ? undefined : state, action)
}

export default rootReducer;
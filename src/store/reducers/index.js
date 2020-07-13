import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import applyUs from './applyUs';
import startProject from './startProject';

export const history = createBrowserHistory();
history.listen(location => {
  setTimeout(() => {
    if (location.action === 'POP') {
      return;
    }
    window.scrollTo(0, 0);
  });
});
const appReducer = combineReducers({
  router: connectRouter(history),
  applyUs, startProject
});

const rootReducer = (state, action) => {
  return appReducer(action.type === `REMOVE_APP_STATES` ? undefined : state, action)
}

export default rootReducer;
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from "redux";

import appReducer from "./reducers";

const logger = createLogger({
  collapsed: true,
  duration: true
});

const app = combineReducers({appReducer});

const store = createStore(
  app,
  applyMiddleware(thunk,logger)
);

export default store;
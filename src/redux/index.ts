/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './app';

const rootReducer = combineReducers({
  appReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

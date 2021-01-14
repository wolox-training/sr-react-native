import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import Reactotron from '../config/reactotronConfig';

import book from './books/reducer';

const middlewares = [thunk, fetchMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

if (__DEV__) enhancers.push(Reactotron.createEnhancer(true));

const reducers = combineReducers({
  book
});

const store = createStore(reducers, compose(...enhancers));

if (__DEV__) Reactotron.setReduxStore(store);

export default store;

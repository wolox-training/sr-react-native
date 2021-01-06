import { createStore, combineReducers, compose } from 'redux';

import Reactotron from '../config/reactotronConfig';

import books from './books/reducer';

const reducers = combineReducers({
  books
});

const enhancers = [];

if (__DEV__) enhancers.push(Reactotron.createEnhancer(true));

const store = createStore(reducers, compose(...enhancers));

if (__DEV__) Reactotron.setReduxStore(store);

export default store;

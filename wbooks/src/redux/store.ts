import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '../config/reactotronConfig';

import book from './books/reducer';

const reducers = combineReducers({
  book
});

const enhancers = [applyMiddleware(thunk)];

if (__DEV__) enhancers.push(Reactotron.createEnhancer(true));

const store = createStore(reducers, compose(...enhancers));

if (__DEV__) Reactotron.setReduxStore(store);

export default store;

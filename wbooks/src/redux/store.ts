import { createStore, combineReducers, compose } from 'redux';

import Reactotron from '../config/reactotronConfig';

import books from './books/reducer';

const reducers = combineReducers({
  books
});

const store = createStore(reducers, compose(Reactotron.createEnhancer()));

if (__DEV__) Reactotron.setReduxStore(store);

export default store;

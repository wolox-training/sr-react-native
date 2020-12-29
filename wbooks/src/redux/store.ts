import { createStore, combineReducers } from 'redux';

import books from './books/reducer';

const reducers = combineReducers({
  books
});

export const store = createStore(reducers);

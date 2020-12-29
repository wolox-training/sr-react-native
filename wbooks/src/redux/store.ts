import { createStore, combineReducers } from 'redux';

import detailBookReducer from './books/reducer';

const reducers = combineReducers({
  book: detailBookReducer
});

export const store = createStore(reducers);

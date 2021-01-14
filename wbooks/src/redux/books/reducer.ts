import { completeState, createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const initialStateDescription = {
  books: null
};

const initialState = completeState(initialStateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(reducerDescription));

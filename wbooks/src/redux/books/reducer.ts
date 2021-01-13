import { actions } from './actions';

const initialState = {
  books: null,
  booksLoading: false,
  booksError: null
};

export default function detailBookReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        booksLoading: true
      };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        booksLoading: false,
        books: action.payload
      };
    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        booksLoading: false,
        booksError: action.payload
      };
    default:
      return state;
  }
}

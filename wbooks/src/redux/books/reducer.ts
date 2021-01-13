import { actions } from './actions';

const initialState = {
  books: null
};

export default function detailBookReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS:
      return {
        books: action.payload
      };
    default:
      return state;
  }
}

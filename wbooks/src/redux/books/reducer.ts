import { actions } from './actions';

const initialState = {
  book: null
};

export default function detailBookReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.detailBook:
      return {
        book: action.payload.book
      };
    default:
      return state;
  }
}

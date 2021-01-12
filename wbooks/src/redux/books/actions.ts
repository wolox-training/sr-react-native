import Book from '@interfaces/book';

export const actions = {
  DETAIL_BOOK: '[Book] Detail'
};

const actionCreators = {
  detailBookAction: (book: Book) => ({
    type: actions.DETAIL_BOOK,
    payload: {
      book
    }
  })
};

export default actionCreators;

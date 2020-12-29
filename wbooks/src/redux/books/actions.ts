export const actions = {
  DETAIL_BOOK: '[Book] Detail'
};

const actionCreators = {
  detailBookAction: (book: string) => ({
    type: actions.DETAIL_BOOK,
    payload: {
      book
    }
  })
};

export default actionCreators;

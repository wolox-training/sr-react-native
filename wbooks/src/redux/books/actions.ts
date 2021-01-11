export const actions = {
  DETAIL_BOOK: '[Book] Detail'
};

const actionCreators = {
  detailBookAction: (book: any) => ({
    type: actions.DETAIL_BOOK,
    payload: {
      book
    }
  })
};

export default actionCreators;

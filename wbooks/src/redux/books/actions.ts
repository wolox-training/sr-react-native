export const actions = {
  detailBook: '[Book] Detail'
};

export function detailBookAction(book: string) {
  return {
    type: actions.detailBook,
    payload: {
      book
    }
  };
}

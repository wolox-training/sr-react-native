import Book from './book';

export default interface State {
  book: {
    books: Book[];
    booksLoading: Boolean;
  };
}

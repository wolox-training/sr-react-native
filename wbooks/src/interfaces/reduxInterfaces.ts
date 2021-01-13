import Book from './book';

export default interface State {
  book: {
    books: Book[] | null;
    booksLoading: Boolean;
    booksError: string | null;
  };
}

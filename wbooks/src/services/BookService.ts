import api from '@config/api';
import Book from '@interfaces/book';

const BookService = {
  getService: () => api.get<Book[]>('')
};

export default BookService;

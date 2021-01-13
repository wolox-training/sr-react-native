import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';

const arrTypes = ['GET_BOOKS', 'GET_BOOKS_SUCCESS', 'GET_BOOKS_FAILURE'];
export const actions = createTypes(completeTypes(arrTypes), '@@BOOKS');

export const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: BookService.getService,
    successSelector: (response: any) => response.data,
    failureSelector: (response: any) => response.error
  })
};

export default actionCreators;

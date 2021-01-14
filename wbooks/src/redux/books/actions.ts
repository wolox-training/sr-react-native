import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';

const arrTypes = ['GET_BOOKS'];
export const actions = createTypes(completeTypes(arrTypes), '@@BOOKS');

export const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'books',
    service: BookService.getService
  })
};

export default actionCreators;

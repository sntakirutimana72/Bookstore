import { payloadWhileDispatch } from '../../helpers/formatters';

const actions = {
  ADD: 'books/ADD_BOOK',
  DELETE: 'books/DELETE_BOOK',
  FETCH_FAIL: 'books/FETCH_FAILED',
  FETCH_SUCCESS: 'books/FETCH_SUCCEEDED',
};

export default actions;

export const afterDelete = ({ id: target }, { books, ...others }) => {
  const reducedBooks = books.filter(({ id }) => id !== target);
  if (reducedBooks.length === 0) {
    return {
      books: reducedBooks,
      ...others,
      error: 'Not Found',
    };
  }
  return {
    books: reducedBooks,
    ...others,
  };
};

export const afterAdd = ({ payload }, { books, loading }) => ({
  loading,
  error: null,
  books: [
    ...books,
    payload,
  ],
});

export const afterFetchSuccess = ({ payload }, { error }) => {
  const books = Object
    .entries(payload)
    .map(([item_id, [others]]) => payloadWhileDispatch({ ...others, item_id }));
  return {
    loading: null,
    error,
    books,
  };
};

export const afterFetchFail = ({ error }, { books }) => ({
  books,
  loading: null,
  error,
});

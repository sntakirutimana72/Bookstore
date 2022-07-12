import { combineReducers } from '@reduxjs/toolkit';
import categories from './categories/categories';
import books from './books/books';

export default combineReducers({
  books,
  categories,
});

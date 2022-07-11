import { combineReducers } from '@reduxjs/toolkit';
import categories from './categories/categories';
import books from './books/books';

const configureStore = () => combineReducers({
  books,
  categories,
});

export default configureStore;

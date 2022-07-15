import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import LdsDots from './Spinner';
import NewBookForm from './NewBookForm';
import { fetchAllBooks } from '../redux/books/books';
import { isObjectEmpty } from '../helpers/formatters';
import styles from './BookList.module.css';

const BookList = () => {
  const { loading, books, error } = useSelector(({ books }) => books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      dispatch(fetchAllBooks());
    }
  }, []);

  return (
    <div className={styles.BookList}>
      {loading && (
        <LdsDots />
      )}
      {error && isObjectEmpty(books) && (
        <p className={styles.Para}>{error}</p>
      )}
      {!isObjectEmpty(books) && (
        <ul>
          {books.map((item) => (<Book key={item.id} book={item} />))}
        </ul>
      )}
      {!loading && (
        <NewBookForm />
      )}
    </div>
  );
};

export default BookList;

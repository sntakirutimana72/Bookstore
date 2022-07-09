import React, { useEffect, useState } from 'react';
import { v4 as uid } from 'uuid';
import Book from './Book';
import NewBookForm from './NewBookForm';
import storage from '../helpers/storage';

import styles from './BookList.module.css';

const BookList = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    if (!books) {
      setBooks([...storage.getItems()]);
    } else {
      storage.setItems(...books);
    }
  });

  return (
    <div className={styles.BookList}>
      <ul>
        {books && books.map((bookItem) => <Book key={uid()} book={bookItem} />)}
      </ul>
      <NewBookForm />
    </div>
  );
};

export default BookList;

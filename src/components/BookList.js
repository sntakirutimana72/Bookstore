import { useSelector } from 'react-redux';
import { v4 as uid } from 'uuid';
import Book from './Book';
import NewBookForm from './NewBookForm';

import styles from './BookList.module.css';

const BookList = () => {
  const books = useSelector(({ books }) => books);

  return (
    <div className={styles.BookList}>
      <ul>
        {books.map((bookItem) => <Book key={uid()} book={bookItem} />)}
      </ul>
      <NewBookForm />
    </div>
  );
};

export default BookList;

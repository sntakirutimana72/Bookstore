import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { setAddedBook } from '../redux/books/books';
import styles from './NewBookForm.module.css';

const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setAddedBook(title, author));
    setTitle('');
    setAuthor('');
  };

  const onTitle = ({ target }) => {
    setTitle(target.value);
  };

  const onAuthor = ({ target }) => {
    setAuthor(target.value);
  };

  return (
    <form onSubmit={onSubmit} className={styles.Form}>
      <div className={styles.Separator} />
      <h2 className={styles.Title}>ADD NEW BOOK</h2>
      <div>
        <div className={styles.Fields}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onTitle}
            className={styles.Field}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="author"
            value={author}
            onChange={onAuthor}
            className={styles.Field}
            placeholder="Author"
            required
          />
          <button type="submit" className={styles.Submit}>ADD BOOK</button>
        </div>
      </div>
    </form>
  );
};

export default NewBookForm;

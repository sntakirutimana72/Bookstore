import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addBookAction } from '../redux/books/books';

const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addBookAction(title, author));
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
    <form onSubmit={onSubmit}>
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onTitle}
        placeholder="Book Title"
        required
      />
      <input
        type="text"
        name="author"
        value={author}
        onChange={onAuthor}
        placeholder="Book Author"
        required
      />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default NewBookForm;

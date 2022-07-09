import PropTypes from 'prop-types';

import css from './Book.module.css';

const Book = ({ book }) => (
  <li className={css.Book}>
    <div className={css.BookInfo}>
      <div>
        <span>{book.genre}</span>
        <h2>{book.title}</h2>
        <span>{book.author}</span>
      </div>
      <div>
        <span />
        <span>
          {book.progress()}
          %
          <br />
          <span>completed</span>
        </span>
      </div>
      <div>
        <span>CURRENT CHAPTER</span>
        <br />
        <span>{book.chapter()}</span>
        <br />
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
    <div className={css.BookActions}>
      <button type="button">Comments</button>
      <button type="button">Remove</button>
      <button type="button">Edit</button>
    </div>
  </li>
);

Book.propTypes = { book: PropTypes.instanceOf(Object).isRequired };

export default Book;

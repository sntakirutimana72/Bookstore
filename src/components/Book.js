import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBookAction } from '../redux/books/books';

import css from './Book.module.css';

const Book = ({ book }) => {
  const progress = (
    book.current !== 0
      ? (100 * book.current) / book.chapters.length
      : 0
  );
  const currentChapter = (
    book.chapters.length
      ? book.chapters[book.current]
      : ''
  );
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteBookAction(book.id));
  };

  return (
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
            {progress}
            %
            <br />
            <span>completed</span>
          </span>
        </div>
        <div>
          <span>CURRENT CHAPTER</span>
          <br />
          <span>{currentChapter}</span>
          <br />
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
      <div className={css.BookActions}>
        <button type="button">Comments</button>
        <button type="button" onClick={onDelete}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    current: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    chapters: PropTypes.instanceOf(Array).isRequired,
  }).isRequired,
};

export default Book;

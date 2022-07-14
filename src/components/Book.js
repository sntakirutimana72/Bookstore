import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { sliceDeletedBook } from '../redux/books/books';

import css from './Book.module.css';

const BookMeta = ({ category, title, author }) => (
  <div>
    <span>{category}</span>
    <h2>{title}</h2>
    <span>{author}</span>
  </div>
);
BookMeta.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

const BookProgress = ({ progress }) => (
  <div>
    <span />
    <span>
      {progress}
      %
      <br />
      <span>completed</span>
    </span>
  </div>
);
BookProgress.propTypes = { progress: PropTypes.number.isRequired };

const BookStatus = ({ chapter }) => (
  <div>
    <span>CURRENT CHAPTER</span>
    <br />
    <span>{chapter}</span>
    <br />
    <button type="button">UPDATE PROGRESS</button>
  </div>
);
BookStatus.propTypes = { chapter: PropTypes.string.isRequired };

const ActionButton = ({ trigger, title }) => (
  <button type="button" onClick={trigger}>{title}</button>
);
ActionButton.propTypes = {
  trigger: PropTypes.oneOfType([PropTypes.any, PropTypes.func]),
  title: PropTypes.string.isRequired,
};
ActionButton.defaultProps = { trigger: null };

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(sliceDeletedBook(book.id));
  };

  const {
    category, title, author, chapters, current,
  } = book;

  const progress = (
    current !== 0
      ? (100 * current) / chapters.length
      : 0
  );

  const chapter = (
    chapters.length
      ? chapters[current]
      : ''
  );

  return (
    <li className={css.Book}>
      <div className={css.BookInfo}>
        <BookMeta category={category} title={title} author={author} />
        <BookProgress progress={progress} />
        <BookStatus chapter={chapter} />
      </div>
      <div className={css.BookActions}>
        <ActionButton title="Comments" />
        <ActionButton trigger={onDelete} title="Remove" />
        <ActionButton title="Edit" />
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
    category: PropTypes.string.isRequired,
    chapters: PropTypes.instanceOf(Array).isRequired,
  }).isRequired,
};

export default Book;

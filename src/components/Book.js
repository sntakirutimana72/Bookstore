import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uid } from 'uuid';
import { sliceDeletedBook } from '../redux/books/books';

import css from './Book.module.css';

const BookMeta = ({ category, title, author }) => {
  const slicer = (str) => {
    const dummies = str.split(';');
    let times = dummies.length - 1;

    if (times < 1) {
      return dummies;
    }
    const newList = [];
    while (times >= 0) {
      const text = dummies.shift();
      if (times === 0) {
        newList.push(text);
        break;
      }
      newList.push(text, '');
      --times;
    }
    return newList;
  };

  return (
    <div>
      <ul className={css.Genre}>
        {slicer(category).map((cat) => (<li key={uid()}>{cat}</li>))}
      </ul>
      <h2 className={css.Title}>{title}</h2>
      <ul className={css.Author}>
        {slicer(author).map((writer) => (<li key={uid()}>{writer}</li>))}
      </ul>
    </div>
  );
};
BookMeta.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

const BookProgress = ({ progress }) => (
  <div className={css.BookProgress}>
    <div className={css.ProgRow}>
      <div
        className={css.ProgressBar}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ '--value': progress }}
      />
      <span className={css.Percentage}>
        {progress}
        %
        <span className={css.Completed}>completed</span>
      </span>
      <div className={css.LineSep2} />
    </div>
  </div>
);
BookProgress.propTypes = { progress: PropTypes.number.isRequired };

const BookStatus = ({ chapter }) => (
  <div className={css.BookStatus}>
    <div className={css.StatusWrap}>
      <span className={css.Current}>CURRENT CHAPTER</span>
      <span className={css.Chapter}>{chapter}</span>
      <button type="button" className={css.UpdateBtn}>UPDATE PROGRESS</button>
    </div>
  </div>
);
BookStatus.propTypes = { chapter: PropTypes.string.isRequired };

const ActionButton = ({ trigger, title }) => (
  <button type="button" onClick={trigger} className={css.Action}>{title}</button>
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
      ? Math.ceil((100 * current) / chapters.length)
      : 0
  );

  const chapter = (
    chapters.length
      ? chapters[current - 1]
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
        <div className={css.LineSep} />
        <ActionButton trigger={onDelete} title="Remove" />
        <div className={css.LineSep} />
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

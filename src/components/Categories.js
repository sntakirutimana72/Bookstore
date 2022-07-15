import { useDispatch, useSelector } from 'react-redux';
import { checkStatusCategAction } from '../redux/categories/categories';
import styles from './Categories.module.css';

const Categories = () => {
  const allCategories = useSelector(({ categories }) => categories);
  const dispatch = useDispatch();

  const onCheckStatus = () => {
    dispatch(checkStatusCategAction());
  };

  const hasList = Array.isArray(allCategories);

  return (
    <div className={styles.Category}>
      {!hasList && (<p className={styles.Para}>{allCategories}</p>)}
      <button
        type="button"
        onClick={onCheckStatus}
        className={styles.CheckStatus}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;

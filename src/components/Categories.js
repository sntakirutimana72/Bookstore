import { useDispatch, useSelector } from 'react-redux';
import { checkStatusCategAction } from '../redux/categories/categories';

const Categories = () => {
  const allCategories = useSelector(({ categories }) => categories);
  const dispatch = useDispatch();

  const onCheckStatus = () => {
    dispatch(checkStatusCategAction());
  };

  const hasList = Array.isArray(allCategories);

  return (
    <>
      {!hasList && (<p>{allCategories}</p>)}
      <button type="button" onClick={onCheckStatus}>Check Status</button>
    </>
  );
};

export default Categories;

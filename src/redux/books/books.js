import { v4 as uid } from 'uuid';
import api from '../../apis/books';
import {
  payloadBeforeDispatch,
  payloadWhileDispatch,
} from '../../helpers/formatters';
import actions, {
  afterAdd,
  afterDelete,
  afterFetchSuccess,
  afterFetchFail,
} from '../actions/books';

const initialState = {
  books: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD:
      return afterAdd(action, state);
    case actions.DELETE:
      return afterDelete(action, state);
    case actions.FETCH_SUCCESS:
      return afterFetchSuccess(action, state);
    case actions.FETCH_FAIL:
      return afterFetchFail(action, state);
    default:
      return state;
  }
};

export default reducer;

export const setAddedBook = (title, author) => {
  const payload = payloadBeforeDispatch(uid(), title, author);
  return async (dispatch) => {
    const success = await api.create(payload);

    if (success) {
      dispatch({
        type: actions.ADD,
        payload: payloadWhileDispatch(payload),
      });
    }
  };
};

export const sliceDeletedBook = (id) => async (dispatch) => {
  const success = await api.delete(id);
  if (success) {
    dispatch({ type: actions.DELETE, id });
  }
};

export const fetchAllBooks = () => (dispatch) => {
  api
    .getAll()
    .then((payload) => dispatch({
      type: actions.FETCH_SUCCESS,
      payload,
    }))
    .catch(({ message }) => dispatch({
      type: actions.FETCH_FAIL,
      error: message,
    }));
};

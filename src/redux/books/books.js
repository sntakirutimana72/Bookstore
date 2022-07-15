import { v4 as uid } from 'uuid';
import api from '../../apis/books';
import {
  isObjectEmpty,
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
  books: [
    {
      id: uid(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      current: 1,
      category: 'Action;Sci-Fi;Adventure',
      chapters: [
        'The Hunger Games',
        'Catching Fire',
        'The Mockingjay',
      ],
    },
    {
      id: uid(),
      title: 'FAST & FURIOUS',
      author: 'Vin Diesel;Ludacris',
      current: 7,
      category: 'Action;Sport',
      chapters: [
        'The Fast and the Furious',
        'Fast 2 Furious',
        'The Fast and the Furious: Tokyo Drift',
        'Fast & Furious 4',
        'Fast Five',
        'Fast & Furious 6',
        'Furious 7',
        'The Fate of the Furious',
      ],
    },
  ],
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
    .then((payload) => {
      if (isObjectEmpty(payload)) {
        throw Error;
      }
      dispatch({ type: actions.FETCH_SUCCESS, payload });
    })
    .catch(() => dispatch({
      type: actions.FETCH_FAIL,
      error: 'Not Found',
    }));
};

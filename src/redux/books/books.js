import { v4 as uid } from 'uuid';

const actions = {
  ADD_BOOK: 'bookstore/books/ADD_BOOK',
  DELETE_BOOK: 'bookstore/books/DELETE_BOOK',
};

const drillFromAction = ({
  id, title, author, current, genre, chapters,
}) => ({
  id, title, author, current, genre, chapters,
});

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [
        ...state,
        drillFromAction(action),
      ];
    case actions.DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export const addBookAction = (title, author) => ({
  title,
  author,
  id: uid(),
  current: 0,
  genre: 'Action',
  chapters: [],
  type: actions.ADD_BOOK,
});

export const deleteBookAction = (id) => ({
  id,
  type: actions.DELETE_BOOK,
});

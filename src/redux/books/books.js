const actions = {
  ADD_BOOK: 'bookstore/books/ADD_BOOK',
  DELETE_BOOK: 'bookstore/books/DELETE_BOOK',
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case actions.DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

let nextBookId = 0;
export const addBookAction = (title, author) => ({
  title,
  author,
  id: ++nextBookId,
  type: actions.ADD_BOOK,
});

export const deleteBookAction = (id) => ({
  id,
  type: actions.DELETE_BOOK,
});

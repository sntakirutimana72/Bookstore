const actions = {
  ADD_BOOK: 'ADD_BOOK',
  DELETE_BOOK: 'DELETE_BOOK',
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
        },
      ];
    case actions.DELETE_BOOK:
      return state.map((book) => book.id !== action.id);
    default:
      return state;
  }
}

export const addBookAction = (title, author) => ({
  title,
  author,
  type: actions.ADD_BOOK,
});

export const deleteBookAction = (id) => ({
  id,
  type: actions.DELETE_BOOK,
});

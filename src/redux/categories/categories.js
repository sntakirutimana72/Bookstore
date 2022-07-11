const actions = {
  CHECK_STATUS: 'bookstore/categories/CHECK_STATUS',
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export const checkStatusCategAction = () => ({ type: actions.CHECK_STATUS });

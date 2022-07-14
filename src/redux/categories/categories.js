import actions from '../actions/categories';

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default reducer;

export const checkStatusCategAction = () => ({ type: actions.CHECK_STATUS });

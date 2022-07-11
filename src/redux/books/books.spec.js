import reducer, { addBookAction, deleteBookAction } from './books';

describe('Books Reducers', () => {
  it('addBookAction', () => {
    const currentState = reducer([], addBookAction('title', 'author'));
    expect(currentState).toEqual([{
      id: 1,
      title: 'title',
      author: 'author',
    }]);
  });

  it('deleteBookAction', () => {
    expect(
      reducer([
        {
          id: 1,
          title: 'title',
          author: 'author',
        },
      ], deleteBookAction(1)),
    ).toEqual([]);
  });

  it('Unknown action', () => {
    expect(
      reducer([
        {
          id: 2,
          title: 'title',
          author: 'author',
        },
      ], { type: 'UNKNOWN' }),
    ).toEqual([
      {
        id: 2,
        title: 'title',
        author: 'author',
      },
    ]);
  });
});

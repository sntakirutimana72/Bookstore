import reducer, { addBookAction, deleteBookAction } from './books';

describe('Books Reducers', () => {
  it('addBookAction', () => {
    const stateAfter = reducer([], addBookAction('title', 'author'));
    expect(stateAfter).toEqual([{
      id: stateAfter[0].id,
      title: 'title',
      author: 'author',
      genre: 'Action',
      current: 0,
      chapters: [],
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

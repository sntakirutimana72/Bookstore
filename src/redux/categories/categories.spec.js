import reducer, { checkStatusCategAction } from './categories';

describe('Categories Reducers', () => {
  it('checkStatus', () => {
    expect(
      reducer([], checkStatusCategAction()),
    ).toBe('Under construction');
  });

  it('Unknown action', () => {
    expect(reducer([], { type: 'UNKNOWN' })).toEqual([]);
  });
});

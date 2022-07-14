import actions from '../actions/books';
import reducer from './books';
import {
  payloadBeforeDispatch,
  payloadWhileDispatch,
} from '../../helpers/formatters';

const initialState = {
  loading: true,
  error: null,
  books: [],
};

describe('Books Reducers', () => {
  it(actions.ADD, () => {
    const beforePayload = payloadBeforeDispatch('title', 'author');
    const afterPayload = payloadWhileDispatch(beforePayload);
    const stateAfter = reducer({
      ...initialState,
      error: 'Not Found',
    }, {
      type: actions.ADD,
      payload: afterPayload,
    });
    expect(stateAfter).toEqual({
      loading: true,
      error: null,
      books: [afterPayload],
    });
  });

  it(actions.FETCH_SUCCESS, () => {
    const payload = {
      ITEM_1: [{
        title: 'title',
      }],
    };
    expect(reducer(initialState, { type: actions.FETCH_SUCCESS, payload }))
      .toEqual({
        ...initialState,
        loading: null,
        books: [
          {
            id: 'ITEM_1',
            title: 'title',
            current: 0,
            chapters: [],
          },
        ],
      });
  });

  it(actions.FETCH_FAIL, () => {
    expect(reducer(initialState, { type: actions.FETCH_FAIL, error: 'ERROR' }))
      .toEqual({ ...initialState, loading: null, error: 'ERROR' });
  });

  it(actions.DELETE, () => {
    const target = {
      id: 'TARGET_ID',
    };
    expect(
      reducer({ ...initialState, books: [target] }, {
        type: actions.DELETE,
        id: target.id,
      }),
    ).toEqual({ ...initialState, error: 'Not Found' });
  });

  it('UNKNOWN', () => {
    expect(reducer(initialState, { type: 'UNKNOWN' }))
      .toEqual(initialState);
  });
});

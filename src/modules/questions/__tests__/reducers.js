import reducer from '../reducers'
// import * as actions from '../actions'

describe('Should return state object', () => {
  const state = {
    status: 'init',
    error: '',
    items: {}
  }

  it('Should return initial state', () => {
    const value = reducer(state, {})
    const expected = {
      status: 'init',
      error: '',
      items: {}
    }

    expect(value).toEqual(expected)
  })
})

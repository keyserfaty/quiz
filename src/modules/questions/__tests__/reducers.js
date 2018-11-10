import reducer from '../reducers'
import * as actions from '../actions'

describe('Should return state object', () => {
  const state = {
    status: 'init',
    error: '',
    items: []
  }

  it('Should return initial state', () => {
    const value = reducer(state, {})
    const expected = {
      status: 'init',
      error: '',
      items: []
    }

    expect(value).toEqual(expected)
  })

  it('Update state to initial on fetchAll', () => {
    const action = {
      type: actions.fetchAllInit,
      payload: {}
    }

    const value = reducer(state, action)
    const expected = {
      status: 'pending',
      error: '',
      items: []
    }

    expect(value).toEqual(expected)
  })

  it('Update state to failure on fetchAll', () => {
    const action = {
      type: actions.fetchAllFailure,
      payload: {
        error: 'some error'
      }
    }

    const value = reducer(state, action)
    const expected = {
      status: 'failure',
      error: 'some error',
      items: []
    }

    expect(value).toEqual(expected)
  })

  it('Update state to success on fetchAll', () => {
    const state = {
      status: 'init',
      error: '',
      items: [
        {
          id: 1,
          status: false
        }
      ]
    }

    const action = {
      type: actions.fetchAllSuccess,
      payload: {
        items: [
          {
            id: 2,
            status: true
          }
        ]
      }
    }

    const value = reducer(state, action)
    const expected = {
      status: 'success',
      error: '',
      items: [
        {
          id: 2,
          status: true
        }
      ]
    }

    expect(value).toEqual(expected)
  })
})

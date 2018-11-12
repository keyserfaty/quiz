import reducer from '../reducers'
import * as actions from '../actions'

describe('Should return state object', () => {
  const state = {
    status: 'init',
    error: '',
    items: [],
    responses: []
  }

  it('Should return initial state', () => {
    const value = reducer(state, {})
    const expected = {
      status: 'init',
      error: '',
      items: [],
      responses: []
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
      items: [],
      responses: []
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
      items: [],
      responses: []
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
      ],
      responses: []
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
      ],
      responses: []
    }

    expect(value).toEqual(expected)
  })

  it('Adds a new response to list', () => {
    const action = {
      type: actions.addResponse,
      payload: {
        response: {
          value: true
        }
      }
    }

    const value = reducer(state, action)
    const expected = {
      status: 'init',
      error: '',
      items: [],
      responses: [{
        value: true
      }]
    }

    expect(value).toEqual(expected)
  })

  it('Clean all responses from list', () => {
    const state = {
      status: 'init',
      error: '',
      items: [],
      responses: [{
        value: true
      }]
    }

    const action = {
      type: actions.cleanResponses,
      payload: {}
    }

    const value = reducer(state, action)
    const expected = {
      status: 'init',
      error: '',
      items: [],
      responses: []
    }

    expect(value).toEqual(expected)
  })
})

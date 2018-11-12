import reducer from '../reducers'
import * as actions from '../actions'

describe('Should return state object', () => {
  const state = {
    type: '',
    data: {},
    onConfirm: '',
    onCancel: ''
  }

  it('Should return initial state', () => {
    const value = reducer(state, {})
    const expected = {
      type: '',
      data: {},
      onConfirm: '',
      onCancel: ''
    }

    expect(value).toEqual(expected)
  })

  it('Should return openAlert', () => {
    const action = {
      type: actions.openAlert,
      payload: {
        type: 'userFeedback',
        data: {
          prop: 'value'
        },
        onConfirm: 'some action',
        onCancel: 'some other action'

      }
    }

    const value = reducer(state, action)
    const expected = {
      type: 'USER_FEEDBACK',
      data: {
        prop: 'value'
      },
      onConfirm: 'some action',
      onCancel: 'some other action'
    }

    expect(value).toEqual(expected)
  })

  it('Should return closeAlert', () => {
    const action = {
      type: actions.closeAlert,
      payload: {}
    }

    const value = reducer(state, action)
    const expected = {
      type: '',
      data: {},
      onConfirm: '',
      onCancel: ''
    }

    expect(value).toEqual(expected)
  })
})
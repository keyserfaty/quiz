import * as selectors from '../selectors'
import { NAMESPACE } from '../constants'

describe('Should return a selector based on a state object', () => {
  const state = {
    [NAMESPACE]: {
      type: 'some type',
      data: {
        prop: 'value'
      },
      onConfirm: 'action',
      onCancel: 'action 2'
    }
  }

  it('Should return type', () => {
    const value = selectors.type(state)
    const expected = 'some type'

    expect(value).toEqual(expected)
  })

  it('Should return data object', () => {
    const value = selectors.data(state)
    const expected = {
      prop: 'value'
    }

    expect(value).toEqual(expected)
  })

  it('Should return onConfirm', () => {
    const value = selectors.onConfirm(state)
    const expected = 'action'

    expect(value).toEqual(expected)
  })

  it('Should return onCancel', () => {
    const value = selectors.onCancel(state)
    const expected = 'action 2'

    expect(value).toEqual(expected)
  })
})
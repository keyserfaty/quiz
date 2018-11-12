import * as helpers from '../helpers'

describe('Should parse a value to true/false', () => {
  it('Should work with True', () => {
    const value = helpers.parseBool('True')
    const expected = true

    expect(value).toEqual(expected)
  })

  it('Should work with False', () => {
    const value = helpers.parseBool('False')
    const expected = false

    expect(value).toEqual(expected)
  })
})
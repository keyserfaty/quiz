import React from 'react'
import Questions from '../../components/Question/index'

import renderer from 'react-test-renderer'

test('Should return a List element', () => {
  const tree = renderer.create(<Questions />).toJSON()
  expect(tree).toMatchSnapshot()
})
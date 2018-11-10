import React from 'react'
import List from '../../components/List/index'

import renderer from 'react-test-renderer'

test('Should return a List element', () => {
  const tree = renderer.create(<List />).toJSON()
  expect(tree).toMatchSnapshot()
})
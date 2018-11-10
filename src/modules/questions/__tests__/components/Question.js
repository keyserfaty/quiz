import React from 'react'
import Questions from '../../components/Question/index'

import renderer from 'react-test-renderer'

test('Should return a List element', () => {
  const props = {
    category: 'Some category',
    question: 'Some question', 
    count: 1
  }

  const tree = renderer.create(<Questions {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
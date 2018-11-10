import React from 'react'
import Results from '../../components/Steps/Results/index'

import renderer from 'react-test-renderer'

test('Should return a List element', () => {
  const props = {
    responses: [
      {
        response: true,
        question: 'Some question 1'
      },
      {
        response: false,
        question: 'Some question 2'
      }
    ],
    score: 3
  }
  
  const tree = renderer.create(<Results {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
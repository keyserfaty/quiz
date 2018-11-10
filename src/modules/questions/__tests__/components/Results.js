import React from 'react'
import Results from '../../components/Steps/Results/index'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

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
  
  const component = renderer.render(<Results {...props} />)
  expect(component).toMatchSnapshot()
})
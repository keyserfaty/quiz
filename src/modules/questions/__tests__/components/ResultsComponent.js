import React from 'react'
import Results from '../../components/Steps/Results/Results'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  const responses = [
    {
      question: 'Some question',
      correct: true
    }
  ]

  const component = renderer.render(<Results correctResponses={1} responses={responses} onRestart={() => {}} />)
  expect(component).toMatchSnapshot()
})
import React from 'react'
import Questions from '../../components/Steps/Question'

import renderer from 'react-test-renderer'

import questions from '../../__mocks__/questions'

test('Should return a List element', () => {
  const component = renderer.create(<Questions questions={questions} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
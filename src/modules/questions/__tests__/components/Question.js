import React from 'react'

import Questions from '../../components/Steps/Question'

import Shallow from 'react-test-renderer/shallow'

import questions from '../../__mocks__/questions'

test('Should render', () => {
  const renderer = new Shallow()
  
  let component = renderer.render(<Questions questions={questions} />)

  expect(component).toMatchSnapshot()
})

test('Should add one to count in shallow', () => {
  const renderer = new Shallow()
  
  let component = renderer.render(<Questions questions={questions} />)

  expect(component).toMatchSnapshot()

  component.props.onNextQuestion()
  component = renderer.getRenderOutput()
  
  expect(component).toMatchSnapshot()
})
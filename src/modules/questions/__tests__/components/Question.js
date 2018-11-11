import React from 'react'

import Questions from '../../components/Steps/Question'

import Shallow from 'react-test-renderer/shallow'

import questions from '../../__mocks__/questions'

const renderer = new Shallow()

test('Should render', () => {
  let component = renderer.render(<Questions questions={questions} />)

  expect(component).toMatchSnapshot('initial render')
})

test('Should add one to count', () => {
  let component = renderer.render(<Questions questions={questions} />)

  expect(component).toMatchSnapshot('initial render')

  component.props.onNextQuestion()
  component = renderer.getRenderOutput()
  
  expect(component).toMatchSnapshot('count should be 2')

  component.props.onNextQuestion()
  component = renderer.getRenderOutput()
  
  expect(component).toMatchSnapshot('count should be 3')
})
import React from 'react'
import List from '../../components/List/index'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  const component = renderer.render(<List />)
  expect(component).toMatchSnapshot()
})

test('Should add a step on click', () => {
  let component = renderer.render(<List />)
  expect(component).toMatchSnapshot()

  component.props.onNextStep()
  component = renderer.getRenderOutput()
  
  expect(component).toMatchSnapshot()
})

test('Should add a step number received', () => {
  let component = renderer.render(<List />)
  expect(component).toMatchSnapshot('initial render')

  component.props.onNextStep(3)
  component = renderer.getRenderOutput()
  
  expect(component).toMatchSnapshot('result should be 2')
})

test('Should update step number even if step > 0', () => {
  let component = renderer.render(<List />)
  expect(component).toMatchSnapshot('initial render')

  component.props.onNextStep(0)
  component = renderer.getRenderOutput()
  
  expect(component).toMatchSnapshot('result should be 0')
})

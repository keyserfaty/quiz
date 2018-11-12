import React from 'react'

import Button from '../index'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  let component = renderer.render(<Button onPress={() => {}} />)

  expect(component).toMatchSnapshot('initial render')
})

test('Should keep status on press if noSpin is true', () => {
  let component = renderer.render(<Button noSpin={true} onPress={() => {}} />)
  component = renderer.getRenderOutput()

  expect(component).toMatchSnapshot('initial render')

  component.props.onPress()
  component = renderer.getRenderOutput()
  
  expect(component).toMatchSnapshot('status should be init')
})

test('Should change status on press', () => {
  let component = renderer.render(<Button onPress={() => {}} />)

  expect(component).toMatchSnapshot('initial render')

  component.props.onPress()
  component = renderer.getRenderOutput()
  
  expect(component).toMatchSnapshot('status should be pending')
})

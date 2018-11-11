import React from 'react'

import Button from '../Button'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  let component = renderer.render(<Button onPress={() => {}}>Content</Button>)

  expect(component).toMatchSnapshot('initial render')
})
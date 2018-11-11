import React from 'react'
import Splash from '../index'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  const component = renderer.render(<Splash />)
  expect(component).toMatchSnapshot()
})
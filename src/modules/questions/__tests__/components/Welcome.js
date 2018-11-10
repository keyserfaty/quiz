import React from 'react'
import Welcome from '../../components/Steps/Welcome/index'

import Shallow from 'react-test-renderer/shallow'

const renderer = new Shallow()

test('Should render', () => {
  const component = renderer.render(<Welcome />)
  expect(component).toMatchSnapshot()
})